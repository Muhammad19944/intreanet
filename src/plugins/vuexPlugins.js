import JWTService from '@/services/jwt.service';
import Socket from "@/services/socket.service";
import Notifier from '@/plugins/notifier';
import axios from "@/plugins/axios";

export default function(store) {
	store.$jwt = JWTService
	store.$socket = new Socket(store)
	store.$notifier = new Notifier(store)
	store.$axios = axios
}
