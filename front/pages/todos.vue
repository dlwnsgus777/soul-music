<template>
	<div>
		<div>{{ this.user }}</div>
		<ul>
			<!-- <li v-for="todo in todos">
				<input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
				<span :class="{ done: todo.done }">{{ todo.text }}</span>
			</li> -->
			<li>
				<input placeholder="What needs to be done?" @keyup.enter="setUser" />
			</li>
		</ul>
	</div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex';
import * as account from '../store/modules/account';
import * as accountMutations from '../store/modules/account/mutations';
import * as accountState from '../store/modules/account/state';

export default {
	computed: {
		...account.mapState({
			user: state => state[accountState.USER],
		}),
	},
	methods: {
		...account.mapMutations({
			setUser: accountMutations.SET_TEST,
		}),
	},
	mounted() {
		console.log(this.user);
	},
};
</script>

<style>
.done {
	text-decoration: line-through;
}
</style>