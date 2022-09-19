import * as fs from 'fs';
import * as path from 'path';
import { generateIcon } from './generateIcon';

type GenerateAllIconsProps = {
	from: string;
	to: string;
	iconEnumPath: string;
};

export const generateAllIcons = async ({
	from,
	to,
	iconEnumPath,
}: GenerateAllIconsProps): Promise<void> => {
	// wtf?
	// fs.rmdirSync(to, { recursive: true });
	if (!fs.existsSync(to)) {
		fs.mkdirSync(to);
	}
	fs.copyFileSync(
		path.join(__dirname, 'flipFunction.ts'),
		path.join(to, 'flipFunction.ts')
	);

	let iconNames = fs.readdirSync(from);
	iconNames = iconNames.sort((a, b) =>
		a.toLowerCase() > b.toLowerCase() ? -1 : 1
	);
	for (const iconName of iconNames) {
		await generateIcon({ from, to, fileName: iconName, iconEnumPath });
	}
};
