import { BaseEnum } from './enumeration';
import { arrayHelper, enumeration } from './enumeration/enumeration';

const _sessionStorageKey = ['MFT'] as const;
export type SessionStorageKey = Record<
	typeof _sessionStorageKey[number],
	BaseEnum
>;

export const sessionStorageKey = enumeration<SessionStorageKey>({
	input: arrayHelper(_sessionStorageKey),
});
