import * as path from 'path';
import * as fs from 'fs';

import { iconTemplate } from './iconTemplate';
import { allIconsIndexTemplate } from './allIconsIndexTemplate';
import { storybookTemplate } from './storybookTemplate';
import { parse } from 'node-html-parser';
import { appendIconEnum } from './appendIconEnum';

type GenerateIconProps = {
	from: string;
	to: string;
	fileName: string;
	iconEnumPath: string;
};

const buildSvgElement = (data: string, componentName: string): string => {
	const removeAttrs = ['width', 'height', 'fill'];
	const newProps = {
		'data-testid': `'${componentName}-svg-component'`,
		transform: `{\`rotate(\${rotate}) translate(\${translateX}, \${translateY}) scale(\${scaleX}, \${scaleY})\`}`,
		fill: '{color}',
		width: '{width}',
		height: '{height}',
	};
	const root = parse(data);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const existingAttrs = (root.childNodes[0] as any).attributes as Record<
		string,
		string
	>;
	removeAttrs.forEach((x) => delete existingAttrs[x]);
	const quotedAttrs = Object.entries(existingAttrs).reduce(
		(acc, [key, value]) => {
			acc[key] = `'${value}'`;
			return acc;
		},
		{} as Record<string, string>
	);

	return (
		Object.entries({ ...quotedAttrs, ...newProps }).reduce(
			(acc, [key, value]) => {
				acc += `${key}=${value} `;
				return acc;
			},
			'<svg '
		) +
		`>
				<title>{title || '${componentName}'}</title>`
	);
};

const writeFile = async (
	content: string,
	path: string,
	altArg?: string
): Promise<void> => {
	try {
		await fs.promises.writeFile(path, content, {
			flag: altArg || 'w+',
		});
	} catch (err) {
		console.log(err);
	}
};

const reactifyInvalidAttributes = (data: string): string => {
	const targets = [
		{ bad: 'fill-rule', good: 'fillRule' },
		{ bad: 'clip-rule', good: 'clipRule' },
	];
	return targets.reduce((acc, t) => {
		acc = acc.replace(new RegExp(t.bad, 'g'), t.good);
		return acc;
	}, data);
};

export const generateIcon = async ({
	from,
	to,
	fileName,
	iconEnumPath,
}: GenerateIconProps): Promise<void> => {
	const componentName = fileName
		.substring(0, fileName.indexOf('.'))
		.replace(fileName.charAt(0), fileName.charAt(0).toUpperCase());
	const componentPath = path.resolve(to, componentName);
	if (fs.existsSync(componentPath)) {
		return;
	}

	// fetching Data of the required SVG file
	let data = fs.readFileSync(path.join(from, fileName), 'utf8');

	const svgElement = data.substring(
		data.indexOf('<svg'),
		data.indexOf('>') + 1
	);
	const newSvgElement = buildSvgElement(svgElement, componentName);
	data = data.replace(svgElement, newSvgElement);
	data = reactifyInvalidAttributes(data);
	const render = iconTemplate({ componentName, data });
	const indexContent = allIconsIndexTemplate(componentName);
	const internalIndexContent = `export { ${componentName} } from './${componentName}'`;
	const storybookContent = storybookTemplate(componentName);
	const iconEnum = await appendIconEnum(componentName, iconEnumPath);

	fs.mkdirSync(componentPath, { recursive: true });
	await writeFile(
		render,
		path.resolve(to, componentName, `${componentName}.tsx`)
	);
	await writeFile(indexContent, path.resolve(to, 'index.tsx'), 'a+');
	await writeFile(
		internalIndexContent,
		path.resolve(to, componentName, 'index.tsx')
	);
	await writeFile(
		storybookContent,
		path.resolve(to, componentName, `${componentName}.stories.tsx`)
	);
	const fullIconPath = path.join(iconEnumPath, '/iconEnum.ts');
	await writeFile(iconEnum, fullIconPath);
};
