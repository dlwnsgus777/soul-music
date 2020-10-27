import * as stateVal from './state';

export const SET_TEST = 'SET_TEST';

const mutations = {
	[SET_TEST](state, payload) {
		console.log('??');
		state[stateVal.USER] = 'test';
	},

	setUser(state, payload) {
		console.log('??');
		console.log(state);
		state[stateVal.USER] = 'asd';
	},
};

export default mutations;
