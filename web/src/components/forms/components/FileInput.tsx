import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import { ImageInput } from './ImageInput';
import { FormElementProps } from '../formTypes';

const FileInput = <T,>({ name }: FormElementProps<T>): JSX.Element => {
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext();

	const handleFileInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files?.length) {
			setFieldValue(name, event.target.files[0]);
		}
	};

	return (
		<StyledWrapper>
			{/* TODO: We can replace this ImageInput with a more generic component
                    to support more types in future */}
			<ImageInput name={name} value={field.value} />
			<StyledInput
				id={name}
				type='file'
				onChange={handleFileInputChange}
			/>
			<ErrorMessage name={field.name}>
				{(msg) => <StyledErrorText>{msg}</StyledErrorText>}
			</ErrorMessage>
		</StyledWrapper>
	);
};

export { FileInput };

const StyledWrapper = styled.div``;

const StyledErrorText = styled.div(
	({ theme: { color } }) => `
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${color.formError};
	`
);

const StyledInput = styled.input`
	display: none;
`;
