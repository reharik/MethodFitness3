import styled from 'styled-components';
import { Icon, iconEnum } from '../../designSystem/iconLibrary';
import { InputChildrenProps } from '../formTypes';

const ImageInput = <T extends { name?: string }>({
	name,
	value,
}: InputChildrenProps<T>): JSX.Element => {
	/**
	 * Since the image source could be of type file (obj) or string url
	 */
	const imgSrc: string =
		typeof value === 'object' && value.name
			? URL.createObjectURL(value as unknown as Blob)
			: typeof value === 'string'
			? value
			: '';

	return (
		<StyledImageInputWrapper>
			{imgSrc ? (
				<>
					{/* Displays uploaded image with the edit icon */}
					<StyledEditLabel htmlFor={name}>
						<Icon
							icon={iconEnum.PencilOutlined}
							title='Edit Icon'
							width={41}
							height={40}
						/>
					</StyledEditLabel>
					<StyledImage src={imgSrc} alt='New User Image' />
				</>
			) : (
				// Displays a placeholder with CameraPlusIcon if image not found
				<StyledCameraLabel htmlFor={name}>
					<Icon
						icon={iconEnum.CameraPlusOutlined}
						title='Camera Icon'
						width={49}
						height={48}
					/>
				</StyledCameraLabel>
			)}
		</StyledImageInputWrapper>
	);
};

export { ImageInput };

const StyledImageInputWrapper = styled.div(
	({ theme: { color } }) => `
    width: 160px;
    height: 160px;
    border: 1px solid ${color.inputBorder};
    border-radius: 50%;
    align-items: center;
    display: flex;
    position: relative;
	transition: 0.15s ease all;

	&:hover {
		border: 1px solid ${color.inputHover};
		cursor: pointer;
	}
    `
);

const StyledCameraLabel = styled.label`
	margin: 0 auto;

	&:hover {
		cursor: pointer;
	}
`;
const StyledEditLabel = styled.label`
	position: absolute;
	left: 130px;
	top: 15px;
	&:hover {
		cursor: pointer;
	}
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
