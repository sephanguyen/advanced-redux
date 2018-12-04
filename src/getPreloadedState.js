import { fromJS } from 'immutable';
const preloadedState = fromJS(window.__PRELOADED__STATE__);
delete window.__PRELOADED__STATE__;

export const getPreloadedState = () => preloadedState;
