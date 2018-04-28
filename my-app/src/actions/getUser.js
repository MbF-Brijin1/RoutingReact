import 'whatwg-fetch';
import { SET_USER_DETAILS } from './types';

export function userdetails(user) {
	return {
		type: SET_USER_DETAILS,
		user,
	};
}