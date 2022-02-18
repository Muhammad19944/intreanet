<template>
	<v-menu offset-y min-width="150">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-bind="attrs"
				v-on="on"
				depressed
				color="transparent"
				:ripple="false"
				height="56"
				class="px-0"
			>
				<div class="app-toolbar__user d-flex align-center mx-4 text-decoration-none">
					<div class="user-avatar d-flex align-center rounded-circle overflow-hidden">
						<v-avatar
							color="primary"
							size="36"
						>
							<template v-if="currentUser.avatar">
								<img :src="currentUser.avatar.url" alt="User avatar">
							</template>

							<template v-else>
								<template v-if="currentUser.first_name">
									<span class="text-white">{{ currentUser.first_name[0] }}</span>
								</template>
							</template>
						</v-avatar>
					</div>
					<div class="ml-2 text-left">
						<p class="small-3 font-400 mb-0 font-500">{{ currentUser.first_name }}</p>
						<span class="d-block small-3 font-600">Username</span>
					</div>
				</div>
			</v-btn>
		</template>

		<v-list>
			<v-list-item>
				<v-list-item-title>
					<router-link :to="{name: 'MainUserProfile'}" class="d-block text-decoration-none py-3">
						<v-icon color="primary">
							mdi-account-outline
						</v-icon>
						<span class="ml-3 font-500">Профиль</span>
					</router-link>
				</v-list-item-title>
			</v-list-item>
			<v-list-item class="user-dropdown-item">
				<v-list-item-title>
					<button @click="logout" type="button" class="d-block text-decoration-none py-3">
						<v-icon color="error" size="22">
							mdi-logout-variant
						</v-icon>
						<span class="ml-3 error-text font-500">Выйти</span>
					</button>
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: "HeaderUser",
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	methods: {
		/*
		*
		* */
		logout() {
			if(!confirm(`Do you want to leave ?`)) {
				return void 0;
			}

			this.$store.dispatch("auth/logOut")
			.then(() => {
				this.$router.push({
					name: "AuthLogin"
				})
			})
		}
	}
}
</script>

<style>
.user-dropdown-item:hover {
	background: var(--transparent-4) !important;
}
</style>
