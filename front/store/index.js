import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.VUE_APP_ENV !== 'prd';

// modules/{module-name}/index.js 파일들을 읽어서, 각각 자신의 'NAMESPACE' 값을 key로 갖는 modules 리턴
const files = require.context('./modules', true, /index.js$/);
const modules = {};
files.keys().forEach(key => {
	modules[files(key).NAMESPACE] = files(key).default;
});

console.log(modules);

//#################################
//공용으로 사용하는 store
//#################################
const state = {};

const getters = {};

const mutations = {};

const actions = {};

export const store = () => {
	return new Vuex.Store({
		state,
		getters,
		mutations,
		actions,
		modules,
	});
};

export default store;
