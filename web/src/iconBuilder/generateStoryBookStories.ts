// Script for generating stories for storybook
import * as path from 'path';
import * as fs from 'fs';

import { storybookTemplate } from './storybookTemplate';

const srcPath = path.resolve(__dirname, '../src/icons');

export const generateStoryBookStories = (componentName: string): void => {
	const render = storybookTemplate(componentName);
	// creates a stories.tsx file at storybook/stories containing a react component
	fs.writeFile(
		path.resolve(srcPath, componentName, `${componentName}.stories.tsx`),
		render,
		{
			flag: 'w+',
		},
		(err) => {
			if (err) {
				console.error(err);
			}
		}
	);
};
