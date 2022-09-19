import Koa from 'koa';
import { config } from './config';
// import { koaAuthMiddleware } from './src/koa/koaMiddleware/koaAuthMiddleware';
import cors from '@koa/cors';
import { koaErrorHandlerMiddleware } from './koa/koaErrorHandlerMiddleware';
import { buildApolloServer } from './buildApolloServer';
import { koaProxyMiddleware } from './koa/koaProxy/proxy';

const createApiUri = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiRoute}`;
// const createcSharpUri = `${config.cSharpProtocol}://${config.cSharpHost}:${config.cSharpPort}/`;
const createcSharpUri = `http://methodfit.net`;
async function startApolloServer() {
	const server = buildApolloServer();
	await server.start();
	const app = new Koa();
	app.use(cors({ credentials: true }));
	app.use(koaErrorHandlerMiddleware);
	// app.use(koaAuthMiddleware);

	const proxy = koaProxyMiddleware('/csharp', {
		target: createcSharpUri,
		logLevel: 'debug',
		changeOrigin: true,
		cookieDomainRewrite: {
			'methodfit.net': 'localhost:3001',
		},
	});
	app.use(proxy);

	// alternatively you can get a composed middleware from the apollo server
	// app.use(server.getMiddleware());
	server.applyMiddleware({ app });

	app.listen({ port: config.apiPort });
	console.log(`🚀 Server ready at ${createApiUri}`);
	return { server, app };
}

startApolloServer();
