import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import vuetify from "@/plugins/vuetify";
import { i18n } from "@/plugins/i18n";
import "@/plugins/toaster"
import "@/plugins/perfect-scrollbar"
import "@/plugins/vuelidate"
import "@/plugins/vuePlugins"
import "@/plugins/ui";

import "@/common/filters"

import "@/assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	i18n,
	render: (h) => h(App),
}).$mount("#app");
