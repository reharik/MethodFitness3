import { config } from './config';

export const knexConfig = {
	client: 'mssql',
	connection: {
		server: config.sqlserverServer,
		user: config.sqlserverUser,
		password: config.sqlserverPassword,
		database: config.sqlserverDatabase,
		options: {
			port: 1433,
		},
	},
	pool: {
		min: 0,
		propagateCreateError: false, // Allows tarn (underlying pool connection manager) to reconnect when an initial connection error happens
	},
};
