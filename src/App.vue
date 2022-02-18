<template>
	<v-app>
		<router-view/>
	</v-app>
</template>

<script>
import { setVH } from "@/common/helpers";

export default {
	name: 'App',
	created() {
		this.getCurrentUser()
	},
	mounted() {
		setVH();

		window.addEventListener(`resize`, setVH);
	},
	methods: {
		/*
		*
		* */
		getCurrentUser() {
			this.$jwt.getToken() && this.$store.dispatch('auth/fetchCurrentUser')
		}
	}
};
</script>
