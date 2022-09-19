// import { config } from './config';

export const knexConfig = {
	client: 'mssql',
	connection: {
		server: '18.222.101.255',
		user: 'methodFitness',
		password: 'm3th0df1t',
		database: 'MethodFitness_PROD',
		options: {
			port: 1433,
		},
	},
	pool: {
		min: 0,
		propagateCreateError: false, // Allows tarn (underlying pool connection manager) to reconnect when an initial connection error happens
	},
};
