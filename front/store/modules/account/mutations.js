import * as val from '../account/state';

export const SET_USER = 'SET_USER';
export default {
	[SET_USER](state, payload) {
		console.log(val);
		console.log(state);
		state[val.USER] = 'test';
	},
};
