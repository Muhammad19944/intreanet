
export default {
	namespaced: true,
	state: {
		isSearching: false,
		chatsSearchList: null,
		globallyUsersList: [],
		isConversationOpen: false,
		isUserDetailSidebarOpen: false,
		conversationUserSelected: {},
		conversationOpenWithUserSelect: {},
		conversationPersonalUsers: [],
		conversationUserMessages: null,
		chatAreaRef: null
	},
	/*
	*
	* */
	getters: {
		getIsSearching: (state) => state.isSearching,
		getChatsSearchList: (state) => state.chatsSearchList,
		getGloballyUsersList: (state) => state.globallyUsersList,
		getIsConversationOpen: (state) => state.isConversationOpen,
		getIsUserDetailSidebarOpen: (state) => state.isUserDetailSidebarOpen,
		getConversationUserSelected: (state) => state.conversationUserSelected,
		getConversationOpenWithUserSelect: (state) => state.conversationOpenWithUserSelect,
		getConversationPersonalUsers: (state) => state.conversationPersonalUsers,
		getConversationUserMessages: (state) => state.conversationUserMessages,
		getChatAreaRef: (state) => state.chatAreaRef,
	},
	/*
	*
	* */
	mutations: {
		'TOGGLE_SEARCH_OVERLAY'(state, payload) {
			state.isSearching = payload
		},
		/*
		*
		* */
		'SET_LIST_CHATS_SEARCH'(state, responses) {
			const [ first, second ] = responses

			state.chatsSearchList = {
				first: first.data,
				second: second.data
			}
		},
		/*
		*
		* */
		'UPDATE_IS_CONVERSATION_OPEN'(state, payload) {
			state.isConversationOpen = payload
		},
		/*
		*
		* */
		'TOGGLE_IS_USER_DETAIL_SIDEBAR_OPEN'(state, payload) {
			state.isUserDetailSidebarOpen = payload
		},
		/*
		*
		* */
		'SET_CONVERSATION_USER_SELECT'(state, payload) {
			state.conversationUserSelected = payload
		},
		/*
		*
		* */
		'SET_CONVERSATION_OPEN_WITH_USER_SELECT'(state, payload) {
			state.conversationOpenWithUserSelect = payload
		},
		/*
		*
		* */
		'SET_CONVERSATION_PERSONAL_USERS_LIST'(state, payload) {
			state.conversationPersonalUsers = payload
		},
		/*
		*
		* */
		'SET_CONVERSATION_USER_MESSAGES'(state, payload) {
			state.conversationUserMessages = payload
		},
		/*
		*
		* */
		'MERGE_CONVERSATION_USER_MESSAGES'(state, payload) {
			if(state.conversationUserMessages.results) {
				state.conversationUserMessages.results.push(payload)
			} else {
				state.conversationUserMessages.results = payload
			}
		},
		/*
		*
		* */
		'SET_CHAT_AREA_REF'(state, payload) {
			state.chatAreaRef = payload
		},
	},
	/*
	*
	* */
	actions: {
		chatAreaInstance({ commit }, payload) {
			commit("SET_CHAT_AREA_REF", payload)

			payload.scrollTop = payload.scrollHeight
		},
		/*
		*
		* */
		fetchSearchUsers({ commit }, payload) {
			const [ writtenByUsers, generalSearchResult, foundMessages ] = payload.api

			this.$axios.all([
				this.$axios.get(writtenByUsers, {
					params: {
						search: payload.value
					}
				}),
				this.$axios.get(generalSearchResult, {
					params: {
						search: payload.value
					}
				})
			])
				.then(this.$axios.spread((...responses) => {
					commit("SET_LIST_CHATS_SEARCH", responses)
				}))
		},
		/*
		*
		* */
		startPrivateChat({ commit, dispatch }, payload) {
			this.$axios.post('/chats/private/', {
				members: [payload.id]
			})
				.then(({ data }) => {
					console.log('11')
					commit("SET_ENTITY",
						{
							module: "chatModule",
							entity: "conversationUserSelected",
							value: payload
						},
						{ root: true }
					)

					commit("SET_CONVERSATION_USER_SELECT", payload)
					commit("SET_CONVERSATION_OPEN_WITH_USER_SELECT", data)

					this.$socket.onMessageSend({
						command: "chat_handshake",
						chat_id: data.id
					})

					dispatch('fetchConversationUserMessages', payload)
				})
				.finally(() => {
					commit("UPDATE_IS_CONVERSATION_OPEN", true)
				})
		},
		/*
		*
		* */
		openPrivateChat({ commit, dispatch, rootGetters }, payload) {
			this.$axios.get(`/chats/private/${payload.id}/`)
				.then(({ data }) => {
					commit("SET_CONVERSATION_USER_SELECT", payload)
					commit("SET_CONVERSATION_OPEN_WITH_USER_SELECT", data)

					dispatch(
						"socket/chatSocket",
						this.$socket.init(process.env.VUE_APP_SOCKET_URL, this.$jwt.getToken()),
						{ root: true }
					)

					rootGetters["socket/getChatSocket"].onOpen({
						command: "chat_handshake",
						chat_id: data.id,
						chat_type: data.type
					})

					rootGetters["socket/getChatSocket"].onMessageReceive()

					dispatch('fetchConversationUserMessages', payload)
				})
				.finally(() => {
					commit("UPDATE_IS_CONVERSATION_OPEN", true)
				})
		},
		/*
		*
		* */
		openUserDetailSidebar({ commit }, payload) {
			commit("TOGGLE_IS_USER_DETAIL_SIDEBAR_OPEN", payload)
		},
		/*
		*
		* */
		fetchConversationUserMessages({ commit, dispatch }, payload) {
			this.$axios.get('/messages/', {
				params: {
					chat: payload.id,
					page_size: 100,
					ordering: "created_date"
				}
			})
				.then(({ data }) => {
					commit("SET_CONVERSATION_USER_MESSAGES", data)
				})
		},
		/*
		*
		* */
		mergeConversationUserMessages({ commit }, payload) {
			commit("MERGE_CONVERSATION_USER_MESSAGES", payload)
		},
		/*
		*
		* */
		fetchConversationUsersList({ commit }) {
			this.$axios.get('/chats/private/')
				.then(({ data }) => {
					commit("SET_CONVERSATION_PERSONAL_USERS_LIST", data)
				})
		},
		/*
		*
		* */
		createChatGroup({ commit }, payload) {
			console.log(payload);
		}
	},
}
