export type PasswordStrengthCharacteristics = Array<{
	name: string;
	display: string;
	regex: RegExp;
	min: number;
}>;

const passwordStrengthValues = {
	specialCharMin: 1,
	uppercaseMin: 1,
	lowercaseMin: 1,
	numberMin: 1,
	lengthMin: 8,
};

// I feel like this could be done in yup.
export const passwordStrengthCharacteristics: PasswordStrengthCharacteristics =
	[
		{
			name: 'uppercase',
			display: `web.password.uppercase`,

			regex: /[A-Z]/,
			min: passwordStrengthValues['uppercaseMin'],
		},
		{
			name: 'specialChar',
			display: `web.password.specialChar`,

			regex: /[@$!%*#?&]/,
			min: passwordStrengthValues['specialCharMin'],
		},
		{
			name: 'lowercase',
			display: `web.password.lowercase`,

			regex: /[a-z]/,
			min: passwordStrengthValues['lowercaseMin'],
		},
		{
			name: 'length',
			display: `web.password.length`,

			regex: /./,
			min: passwordStrengthValues['lengthMin'],
		},
		{
			name: 'number',
			display: `web.password.number`,

			regex: /\d/,
			min: passwordStrengthValues['numberMin'],
		},
	];
