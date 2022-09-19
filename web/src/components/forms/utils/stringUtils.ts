export const maxCharacterLimits = {
	firstname: 125,
	lastname: 125,
	notes: 2500,
	externalId: 250,
};

export const truncateString = (str: string, num: number): string => {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	}
	return str;
};
