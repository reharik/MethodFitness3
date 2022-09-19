import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { DocumentNode } from 'graphql';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let resolvers: any[];
let typeDefs: DocumentNode;
try {
	resolvers = loadFilesSync(path.join(__dirname, './resolvers'), {
		ignoredExtensions: ['test', 'fixture', 'mock'],
	});
	const schemas = loadFilesSync(path.join(__dirname, './typeDefs'), {
		extensions: ['graphql'],
	});

	typeDefs = mergeTypeDefs(schemas) as DocumentNode;
} catch (err) {
	console.log(`************err************`);
	console.log(err);
	console.log(`********END err************`);
}
export { typeDefs, resolvers };
