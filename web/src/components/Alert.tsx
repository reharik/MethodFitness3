import styled from 'styled-components';
import { EnumItemOf } from '../enums/enumeration';
import { notificationType, NotificationType } from '../enums/notificationType';

type AlertProps = {
	notification?: TNotification;
};

export type TNotification = {
	type: EnumItemOf<NotificationType>;
	message: string;
};

export const Alert = ({ notification }: AlertProps) => {
	if (!notification) {
		return null;
	}

	return (
		<StyledAlert type={notification.type}>
			{notification.message}
		</StyledAlert>
	);
};

type StyledAlertProps = { type: EnumItemOf<NotificationType> };
const StyledAlert = styled.div<StyledAlertProps>(
	({ type, theme: { color, fontSize, spacing } }) => `
	background-color: ${
		type === notificationType.error ? color.alertError : color.alertSuccess
	};
	color: ${color.white};
	width:99%;
	height: ${spacing.md}px;
	border-radius: 3px;
	margin: 0 ${spacing.xxs};
	padding: ${spacing.xs} ${spacing.sm};
	white-space:pre-wrap;
`
);
