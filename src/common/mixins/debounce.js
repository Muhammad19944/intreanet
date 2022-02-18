import { debounce } from "lodash/function";

import { mapMutations } from "vuex";

export default {
	data() {
		return {
			debounceSearch: ""
		}
	},
	methods: {
		...mapMutations({
			TOGGLE_SEARCH_OVERLAY : "search/TOGGLE_SEARCH_OVERLAY",
			LOADING: "LOADING"
		}),
		/*
		*
		* */
		$debounce(api) {
			if(!this.debounceSearch) {
				this.TOGGLE_SEARCH_OVERLAY(false)

				return false
			}

			this.TOGGLE_SEARCH_OVERLAY(true)
			this.LOADING(true)

			this.trigger(api)
		},
		/*
		*
		* */
		trigger: debounce(function(api) {
			this.$store.dispatch("search/fetchSearch", {
				api,
				value: this.debounceSearch
			}).then(() => {
				this.LOADING(false)
			})
		}, 500)
	}
};
