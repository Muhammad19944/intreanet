
export default {
	namespaced: true,
	state: {
		isSearching: false
	},
	/*
	*
	* */
	getters: {
		getIsSearching: (state) => state.isSearching
	},
	/*
	*
	* */
	mutations: {
		'TOGGLE_SEARCH_OVERLAY'(state, payload) {
			state.isSearching = payload
		}
	},
	/*
	*
	* */
	actions: {
		fetchSearch({ commit }, payload) {
			this.$axios.get(payload.api, {
				params: {
					search: payload.value
				}
			})
			.then(({ data }) => {
				console.log(data);
			})
		}
	},
}
