type FetchUtilProps = {
	url: string;
	method?: 'GET' | 'POST';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body?: any;
	contentType: string;
};

export type Response = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any;
	success: boolean;
};

export const fetchUtil = async ({
	url,
	method = 'GET',
	body,
	contentType = 'application/json; charset=UTF-8',
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
FetchUtilProps): Promise<any> => {
	let bodyString;
	if (body) {
		if (typeof body === 'string') {
			bodyString = body;
		} else {
			bodyString = JSON.stringify(body);
		}
	}
	try {
		const resp = await fetch(url, {
			method,
			body: bodyString,
			headers: {
				'Content-Type': contentType,
			},
			credentials: 'include',
		});
		return { success: true, data: await resp.json() };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		return { success: false, error: err };
	}
};
