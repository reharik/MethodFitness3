import { config as dotEnvConfig, DotenvConfigOutput } from 'dotenv';

const nodeEnvs = ['development', 'test', 'production', 'prod'];
type NodeEnv = typeof nodeEnvs[number];

export type Config = {
	nodeEnv: NodeEnv;
	logging_level: string;
	apiHost: string;
	apiPort: number;
	apiProtocol: string;
	apiRoute: string;
	cSharpHost: string;
	cSharpPort: number;
	cSharpProtocol: string;
	applicationEnv: string;
	databaseConnection: string;
	tokenHeaderKey: string;
	jwtSecretKey: string;
};

let instantiatedDotEnv: DotenvConfigOutput;
let config_: Config;

export const setupConfig = (): Config => {
	if (!instantiatedDotEnv) {
		instantiatedDotEnv = dotEnvConfig();
	}
	config_ = config_ || {
		nodeEnv: process.env.NODE_ENV || 'development',
		logging_level: process.env.LOGGING_LEVEL || 'info',
		apiHost: process.env.API_HOST || '127.0.0.1',
		apiRoute: process.env.API_ROUTE || 'graphql',
		apiPort: isNaN(parseInt(process.env.API_PORT || '', 10))
			? 8080
			: parseInt(process.env.API_PORT || '', 10),
		apiProtocol: process.env.API_PROTOCOL || 'http',
		cSharpHost: process.env.CSHARP_HOST || '127.0.0.1',
		cSharpPort: isNaN(parseInt(process.env.CSHARP_PORT || '', 10))
			? 8090
			: parseInt(process.env.CSHARP_PORT || '', 10),
		cSharpProtocol: process.env.CSHARP_PROTOCOL || 'http',
		applicationEnv: process.env.APPLICATION_ENV || 'local',
		databaseConnection: process.env.DATABASE_CONNECTION || '',
		tokenHeaderKey: process.env.TOKEN_HEADER_KEY || '',
		jwtSecretKey: process.env.JWT_SECRET_KEY || '',
	};
	return config_;
};

export const config = setupConfig();
// dumb fix this
export const isLocal = (): boolean => config.applicationEnv === 'local';
export const isDev = (): boolean => config.applicationEnv === 'dev';
export const isQa = (): boolean => config.applicationEnv === 'qa';
export const isStaging = (): boolean => config.applicationEnv === 'staging';
export const isProd = (): boolean => config.applicationEnv === 'prod';
