import { createNamespacedHelpers } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const NAMESPACE = 'account';

const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers(NAMESPACE);

export { NAMESPACE, mapState, mapGetters, mapActions, mapMutations };

console.log(actions, mutations, getters, state);

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};