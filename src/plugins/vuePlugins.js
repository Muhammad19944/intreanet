import Vue from "vue";
import store from "@/store"
import axios from "@/plugins/axios"
import Notifier from "@/plugins/notifier";
import JWTService from "@/services/jwt.service"
import Socket from "@/services/socket.service";

const plugins = {
	install (Vue) {
		Vue.mixin({
			computed: {
				$axios() {
					return axios
				},
				$jwt: () => JWTService,
				$notifier: () => new Notifier(store),
				$socket: () => new Socket(store)
			}
		});
	}
};

Vue.use(plugins);
