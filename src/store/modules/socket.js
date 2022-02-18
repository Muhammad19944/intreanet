
export default {
	namespaced: true,
	state: {
		userHandShakeSocket: null,
		chatSocket: null,
	},
	/*
	*
	* */
	getters: {
		getUserHandShakeSocket: (state) => state.userHandShakeSocket,
		getChatSocket: (state) => state.chatSocket,
	},
	/*
	*
	* */
	mutations: {
		"SET_USER_HANDSHAKE_SOCKET"(state, payload) {
			state.userHandShakeSocket = payload
		},
		/*
		*
		* */
		"SET_CHAT_SOCKET"(state, payload) {
			state.chatSocket = payload
		},
	},
	/*
	*
	* */
	actions: {
		initUserHandShakeSocket({ commit }, payload) {
			commit("SET_USER_HANDSHAKE_SOCKET", payload)
		},
		/*
		*
		* */
		chatSocket({ commit, dispatch, state }, payload) {
			commit("SET_CHAT_SOCKET", payload)
		}
	},
}
