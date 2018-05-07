import 'whatwg-fetch';
// import basicAuth from 'config/basicAuth';
import { FETCH_DASHBOARD_DATA, RESET_FEATURE } from './types';
// import { handleResponse } from './utils';

export function fetchDashboardData(dashboard) {
  return {
    type: FETCH_DASHBOARD_DATA,
    dashboard,
  };
}

export function getDashboardAction() {
  return dispatch =>
    fetch('https://codepen.io/jobs.json', {
      method: 'get'
    })
      .then(handleResponse)
      .then(res => dispatch(fetchDashboardData(res)));
}

export function resetFeature(id) {
  return {
    type: RESET_FEATURE,
    id
  }
}


export function resetFeatureAction(id) {
  return dispatch => dispatch(resetFeature(id))
}