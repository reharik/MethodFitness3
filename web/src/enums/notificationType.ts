import { BaseEnum } from './enumeration';
import { arrayHelper, enumeration } from './enumeration';

const _notificationType = ['warning', 'success', 'error'] as const;
export type NotificationType = Record<
	typeof _notificationType[number],
	BaseEnum
>;

export const notificationType = enumeration<NotificationType>({
	input: arrayHelper(_notificationType),
});
