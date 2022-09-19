import { DateTime } from 'luxon';
import { enumeration } from './enumeration/enumeration';
import { BaseEnum } from './enumeration/types';

export type TFrequency = { [Property in keyof typeof freq]: Frequency };

export type Frequency = BaseEnum & {
	eligible: (lastContacted: DateTime) => boolean;
};

const freq = {
	everyWeek: {
		value: 'everyWeek',
		eligible: (lastContacted: DateTime) =>
			lastContacted > DateTime.now().plus({ weeks: 1 }),
	},
	every2Week: {
		value: 'every2Week',
		eligible: (lastContacted: DateTime) =>
			lastContacted > DateTime.now().plus({ weeks: 2 }),
	},
	every3Week: {
		value: 'every3Week',
		eligible: (lastContacted: DateTime) =>
			lastContacted > DateTime.now().plus({ weeks: 3 }),
	},
	everyMonth: {
		value: 'everyMonth',
		eligible: (lastContacted: DateTime) =>
			lastContacted > DateTime.now().plus({ months: 1 }),
	},
	every6Weeks: {
		value: 'every6Weeks',
		eligible: (lastContacted: DateTime) =>
			lastContacted > DateTime.now().plus({ weeks: 6 }),
	},
};

export const frequency = enumeration<TFrequency, Frequency>({
	input: freq,
});
