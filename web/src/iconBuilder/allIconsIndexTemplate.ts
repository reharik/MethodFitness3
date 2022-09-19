export const allIconsIndexTemplate = (component: string): string => {
	const indexContent = `export { ${component} } from './${component}';
`;
	return indexContent;
};
