import { createProxyServer } from 'http-proxy';

import { Options } from './types';
import Koa from 'koa';

const proxy = createProxyServer({});

export const koaProxyMiddleware = (slug: string, options: Options) => {
	return async (
		ctx: Koa.Context,
		next: Koa.Next
	): Promise<Koa.Context | undefined> => {
		const originalUrl = ctx.request.url;
		const originalPath = ctx.request.path;
		if (!originalPath.startsWith(slug)) {
			return await next();
		}
		const newPath = originalPath.replace(slug, '');
		const fullTarget = options.target + newPath;
		ctx.req.url = fullTarget;
		console.log(`Proxying ${originalUrl} -> ${ctx.req.url}`);

		return new Promise((resolve, reject) => {
			ctx.res.on('close', () => {
				reject(
					new Error(
						`Http response closed while proxying ${originalUrl}`
					)
				);
			});
			ctx.res.on('finish', () => {
				resolve(ctx);
			});
			ctx.res.on('error', (error) => {
				reject(error);
			});

			proxy.web(ctx.req, ctx.res, options, (e) => {
				const statusTransform = {
					ECONNREFUSED: 503,
					ETIMEOUT: 504,
				};
				const status =
					// fixme
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					statusTransform[e.code as keyof typeof statusTransform];
				ctx.status = status || 500;
				resolve(ctx);
			});
		});
	};
};
