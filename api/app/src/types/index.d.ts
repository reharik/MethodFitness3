export type Response = {
	success: boolean;
	errors: Error[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
};

export type Error = {
	message: string;
};

export type Context = {
	isLoggedIn?: boolean;
	currentUser?: CurrentUser;
};

export type CurrentUser = {
	entityId: string;
	firstName: string;
	lastName: string;
	authenticated?: boolean;
	token?: string;
};
