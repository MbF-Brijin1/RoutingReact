import 'whatwg-fetch';
import store from 'store';

export function handleResponse(response, currentAction,resData,redirtTo) {
	if(response.ok) {
		return response.json();
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}