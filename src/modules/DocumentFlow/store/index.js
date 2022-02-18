export default {
	namespaced: true,
	state: {
		referencesList: [],
		journalList: []
	},
	/*
	*
	* */
	getters: {
		getReference: (state) => state.referencesList,
		filterReferenceList: (state) => (filter) => state.referencesList.filter(reference => reference.type === filter),
		getJournalList: (state) => state.journalList
	},
	/*
	*
	* */
	mutations: {
		"SET_REFERENCES_LIST"(state, payload) {
			state.referencesList = payload
		},
		/*
		*
		* */
		"SET_JOURNAL_LIST"(state, payload) {
			state.journalList = payload
		}
	},
	/*
	*
	* */
	actions: {
		/*
		* Инициализация начальных запросов
		* */
		init({ dispatch }) {
			dispatch("fetchReferencesList")
			dispatch("fetchJournalList")
		},
		/*
		* Получать лист корреспондентов и вид документов
		* */
		fetchReferencesList({ commit }) {
			this.$axios.get("/docflow/reference/")
				.then(({ data }) => {
					commit("SET_REFERENCES_LIST", data.results)
				})
		},
		/*
		* Получать лист журналов
		* */
		fetchJournalList({ commit }) {
			this.$axios.get("/docflow/journal/")
				.then(({ data }) => {
					commit("SET_JOURNAL_LIST", data.results)
				})
		},
		/*
		* Регистрация входящего документа
		* */
		fetchRegisterIncomingDocument({ commit }, payload) {
			return new Promise((resolve) => {
				this.$axios.post("/docflow/incoming/", payload)
					.then(({ data }) => {
						resolve(data)
					})
			})
		}
	}
}
