import fs from 'fs';
import path from 'path';

const retrieveData = (componentName: string, enumPath: string) => {
	const data = fs.readFileSync(enumPath, 'utf8');
	return {
		data,
		alreadyExists: data.includes(`	${componentName}:`) ? undefined : data,
	};
};

const createIconEnumFile = async (enumPath: string) => {
	const data = `import { enumeration, EnumItemOf } from 'eng-common-web/enumerations';

export type TIconEnum = {

};

const _icons = {

};
	
export const iconEnum = enumeration<typeof _icons>({ input: _icons });
`;
	try {
		await fs.promises.writeFile(enumPath, data, {
			flag: 'w+',
		});
	} catch (err) {
		console.log(err);
	}
};

export const appendIconEnum = async (
	componentName: string,
	iconEnumPath: string
): Promise<string> => {
	const enumPath = path.join(iconEnumPath, '/iconEnum.ts');
	if (!fs.existsSync(enumPath)) {
		await createIconEnumFile(enumPath);
	}
	const dataResult = retrieveData(componentName, enumPath);

	if (!dataResult.alreadyExists) {
		return dataResult.data;
	}
	const enumTarget = `const _icons = {`;
	const enumSub = `const _icons = {
	${componentName}: { value: '${componentName}' },`;
	const typeTarget = `export type TIconEnum = {`;
	const typeSub = `export type TIconEnum = {
	${componentName}: EnumItemOf<TIconEnum>;`;
	let result = dataResult.data.replace(enumTarget, enumSub);
	result = result.replace(typeTarget, typeSub);
	return result;
};
