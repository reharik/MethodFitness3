import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { config } from '../../config';
import { fetchUtil } from '../../utils/fetchUtil';
const apiUri = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiProxyRoute}`;

export const Calendar = () => {
	// const location = useLocation();
	// const [content, setContent] = useState();
	// console.log(location);
	// useEffect(() => {
	// 	fetchUtil({
	// 		url: `${apiUri}/Scheduler`,
	// 		method: 'GET',
	// 		contentType: 'text/html; charset=utf-8',
	// 	}).then((response) => {
	// 		setContent(response);
	// 	});
	// }, []);
	if (window.location.hash !== '#calendar') {
		window.location.assign(' #calendar');
	}

	return <></>;
};
