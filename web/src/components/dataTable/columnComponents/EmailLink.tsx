type EmailLinkProps = {
	emailAddress: string;
};

const EmailLink = ({ emailAddress }: EmailLinkProps): JSX.Element => (
	<div>
		<a href={'mailto:' + emailAddress}>{emailAddress}</a>
	</div>
);

export { EmailLink };
