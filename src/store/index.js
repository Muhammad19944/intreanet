import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

import vuexPlugins from "@/plugins/vuexPlugins";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isDynamicModuleLoaded: false,
		isLoading: false,
		changedDate: "",
	},
	/*
	 *
	 * */
	getters: {
		getChangedDate: (state) => state.changedDate,
		getLoading: (state) => state.isLoading
	},
	/*
	 *
	 * */
	mutations: {
		SET_ENTITY(state, { module, entity, value }) {
			console.log(state, { module, entity, value });
			// module ? state[module][entity] = value : state[entity] = value
		},
		/*
		*
		* */
		LOADED_DYNAMIC_MODULE(state, payload) {
			state.isDynamicModuleLoaded = payload;
		},
		/*
		*
		* */
		'LOADING'(state, payload) {
			state.isLoading = payload
		},
		/*
		 *
		 * */
		UPDATE_CHANGED_DATE(state, payload) {
			state.changedDate = payload;
		},
	},
	/*
	 *
	 * */
	actions: {

	},
	/*
	 *
	 * */
	modules,
	/*
	*
	* */
	plugins: [vuexPlugins]
});
