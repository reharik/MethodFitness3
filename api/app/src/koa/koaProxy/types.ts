import type * as httpProxy from 'http-proxy';
import type * as koa from 'koa';
import type * as http from 'http';
import type * as net from 'net';
import type * as url from 'url';
export type Request = koa.Request;
export type Response = koa.Response;

export declare type Filter =
	| string
	| string[]
	| ((pathname: string, req: Request) => boolean);

export interface Options extends httpProxy.ServerOptions {
	pathRewrite?:
		| {
				[regexp: string]: string;
		  }
		| ((path: string, req: Request) => string)
		| ((path: string, req: Request) => Promise<string>);
	router?:
		| {
				[hostOrPath: string]: httpProxy.ServerOptions['target'];
		  }
		| ((req: Request) => httpProxy.ServerOptions['target'])
		| ((req: Request) => Promise<httpProxy.ServerOptions['target']>);
	logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'silent';

	onError?: OnErrorCallback;
	onProxyRes?: OnProxyResCallback;
	onProxyReq?: OnProxyReqCallback;
	onProxyReqWs?: OnProxyReqWsCallback;
	onOpen?: OnOpenCallback;
	onClose?: OnCloseCallback;
}

export declare type OnErrorCallback = (
	err: Error,
	req: Request,
	res: Response,
	target?: string | Partial<url.Url>
) => void;
export declare type OnProxyResCallback = (
	proxyRes: http.IncomingMessage,
	req: Request,
	res: Response
) => void;
export declare type OnProxyReqCallback = (
	proxyReq: http.ClientRequest,
	req: Request,
	res: Response,
	options: httpProxy.ServerOptions
) => void;
export declare type OnProxyReqWsCallback = (
	proxyReq: http.ClientRequest,
	req: Request,
	socket: net.Socket,
	options: httpProxy.ServerOptions,
	head: any
) => void;
export declare type OnCloseCallback = (
	proxyRes: Response,
	proxySocket: net.Socket,
	proxyHead: any
) => void;
export declare type OnOpenCallback = (proxySocket: net.Socket) => void;
