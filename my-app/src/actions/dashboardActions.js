import 'whatwg-fetch';
import { FETCH_DASHBOARD_DATA } from './types';
import { handleResponse } from './utils';


export function fetchDashboardData(dashboard) {
	return {
		type: FETCH_DASHBOARD_DATA,
		dashboard,
	};
}

export function getDashboardAction() {fetchDashboardData
	return dispath =>
		fetch('https://codepen.io/jobs.json', {
			method: 'get'
		})
		.then(handleResponse)
		.then(res => dispath(fetchDashboardData(res)));
}