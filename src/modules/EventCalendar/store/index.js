
export default {
	state: () => ({
		calendar: {
			ref: ""
		}
	}),
	/*
	*
	* */
	getters: {
		getCalendar: (state) => state.calendar
	},
	/*
	*
	* */
	mutations: {
		"SET_TODAY"(state) {
			state.calendar.focus = ""
		},
		/*
		*
		* */
		"SET_CALENDAR_REF"(state, payload) {
			state.calendar.ref = payload
		}
	},
	/*
	*
	* */
	actions: {

	},
}
