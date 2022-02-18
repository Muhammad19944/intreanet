<template>
	<div class="auth-view d-flex">
		<v-switch
			@change="changeMode"
			v-model="$vuetify.theme.dark"
			inset
			class="p-absolute"
			style="left: 20px"
		></v-switch>

		<div class="auth-view__form d-flex pa-10 w-100">
			<form @submit.prevent="send" class="auth-form w-100 ma-auto text-center">
				<h1 class="font-700 color-text-1 mb-1">Вход в систему</h1>
				<span class="color-text-3 body--2 d-block mb-10">С возвращением, по вам скучали!</span>

				<div class="app-input mb-7">
					<v-text-field
						v-model="userModel.username"
						placeholder="Номер паспорта"
						outlined
						clearable
						hide-details
						background-color="var(--bg-3)"
					></v-text-field>
				</div>

				<div class="app-input mb-7">
					<v-text-field
						v-model="userModel.password"
						placeholder="Номер табеля"
						outlined
						clearable
						hide-details
						background-color="var(--bg-3)"
					></v-text-field>
				</div>

				<app-button
					@click="send"
					min-width="200"
					min-height="50"
					depressed
				>
					<template #default>
						Войти в систему
					</template>
					<template #append>
						<v-icon size="22">mdi-send</v-icon>
					</template>
				</app-button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			userModel: {
				username: "",
				password: ""
			}
		}
	},
	methods: {
		send() {
			this.$store.dispatch('auth/login', this.userModel)
			.then(() => {
				this.$router.push({name: 'MainDashboard'})
			})
		},

		/*
		*
		* */
		changeMode(val) {
			const body = document.body

			val ? body.setAttribute("v-theme", "dark") : body.removeAttribute("vs-theme")
		}
	}
}
</script>

<style>
.auth-view__form {
	background: var(--bg-4);
}

.auth-form {
	max-width: 540px;
}
</style>
