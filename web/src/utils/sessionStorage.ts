import { EnumItemOf } from '../enums/enumeration';
import { SessionStorageKey } from '../enums/sessionStorageKeys';

export const setSessionStorage = <T>(
	data: T,
	key: EnumItemOf<SessionStorageKey>
): void => {
	window.sessionStorage.setItem(key.value, JSON.stringify(data));
};
export const getSessionStorage = <T>(key: EnumItemOf<SessionStorageKey>): T => {
	const sessionData = window.sessionStorage.getItem(key.value);
	return sessionData ? JSON.parse(sessionData) : null;
};

export const clearSessionStorage = (
	key: EnumItemOf<SessionStorageKey>
): void => {
	window.sessionStorage.removeItem(key.value);
};
