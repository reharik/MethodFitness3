import Koa from 'koa';

export const koaErrorHandlerMiddleware: Koa.Middleware = async (
	ctx: Koa.Context,
	next: Koa.Next
): Promise<Koa.Context | undefined> => {
	try {
		return await next();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// will only respond with JSON
		err.status = err.statusCode || err.status || 500;
		ctx.body = {
			message: err.message,
		};
	}
};
