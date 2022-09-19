type Config = {
	nodeEnv: string;
	// should be specific options once we know what they will be
	logging_level: string;
	// should be specific options once we know what they will be
	logging_transports: string;
	host: string;
	apiHost: string;
	apiPort: number;
	apiProtocol: string;
	apiRoute: string;
	apiProxyRoute: string;
};

export const getConfig = (): Config => {
	return {
		nodeEnv: process.env.NODE_ENV || 'development',
		// All of the subsequent env vars should be prefixed with REACT_APP_.
		// If they are not they will not be found in the process.env
		logging_level: process.env.REACT_APP_LOGGING_LEVEL || 'INFO',
		// list of logging outputs e.g. console, logly, someother transport
		logging_transports:
			process.env.REACT_APP_LOGGING_TRANSPORTS || 'console',
		host: process.env.REACT_APP_HOST || 'localhost',
		apiHost: process.env.REACT_APP_API_HOST || 'localhost',
		apiPort: isNaN(parseInt(process.env.REACT_APP_API_PORT || '', 10))
			? 3000
			: parseInt(process.env.REACT_APP_API_PORT || '', 10),
		apiProxyRoute: process.env.API_PROXY_ROUTE || 'csharp',
		apiRoute: process.env.API_ROUTE || 'graphql',
		apiProtocol: process.env.REACT_APP_API_PROTOCOL || 'http',
	};
};

export const config: Config = getConfig();
