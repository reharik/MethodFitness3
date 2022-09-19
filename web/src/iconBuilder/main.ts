import * as path from 'path';
import { generateIcon } from './generateIcon';
import { generateAllIcons } from './generateAllIcons';

const svgPath = path.resolve(__dirname, './svgs');
const iconPath = path.resolve(__dirname, '../packages/iconLibrary/icons');
const iconEnumPath = path.resolve(__dirname, '../packages/iconLibrary');
export const generateIcons = (() => {
	// Script for generating ALL React SVG components
	if (process.argv[2] === '--target=all') {
		generateAllIcons({
			from: svgPath,
			to: iconPath,
			iconEnumPath,
		});
	} else {
		generateIcon({
			from: svgPath,
			to: iconPath,
			fileName: process.argv[2],
			iconEnumPath,
		});
	}
})();
