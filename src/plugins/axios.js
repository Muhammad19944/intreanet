import Vue from "vue";
import Axios from "axios";
import { getToken, removeToken } from "@/services/jwt.service";

Axios.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: getToken() ? "Token " + getToken() : "",
            Accept: "application/json"
        };
        return config;
    },
    (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            removeToken();
        }

        Vue.$toast.error(error.response.data.join(""));

        return Promise.reject(error.response);
    }
);

Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.prototype.$http = Axios;

export default Axios;
