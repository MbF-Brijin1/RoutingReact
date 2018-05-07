import { FETCH_DASHBOARD_DATA } from 'actions/types';

const initialState = {
	jobs:[]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA:
      return action.dashboard;
    case RESET_FEATURE:
    	const resetState = state.jobs.map((el, i) => {
    		if(i === action.id) {
    			el.featured = !el.featured;
    			return el;
    		} else {
    			return el;
    		}
    	});
    	return {
    		jobs:resetState
    	};
    default:
      return state;
  }
};