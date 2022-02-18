import { removeToken, saveToken } from "@/services/jwt.service";

export default {
	namespaced: true,
	state: {
		userLoggedIn: false,
		currentUser: {}
	},
	/*
	*
	* */
	getters: {
		getCurrentUser: (state) => state.currentUser
	},
	/*
	*
	* */
	mutations: {
		SET_CURRENT_USER(state, payload) {
			state.currentUser = payload.user || payload
		},
	},
	/*
	*
	* */
	actions: {
		/*
		*
		* */
		login({ commit }, payload) {
			return new Promise(resolve => {
				this.$axios.post(`/login/`, payload)
					.then(({ data }) => {
						commit('SET_CURRENT_USER', data)
						saveToken(data.token)

						resolve()
					})
			})
		},

		/*
		*
		* */
		logOut({ commit }) {
			return new Promise(resolve => {
				commit('SET_CURRENT_USER', {})
				removeToken()

				resolve()
			})
		},

		/*
		* Get current user
		* */
		fetchCurrentUser({ commit }) {
			return new Promise((resolve) => {
				this.$axios.get("/user/my/profile/")
					.then(({ data }) => {
						commit('SET_CURRENT_USER', data)
					})
			})
		}
	},
}
