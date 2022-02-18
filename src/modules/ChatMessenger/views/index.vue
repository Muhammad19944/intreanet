<template>
	<div class="chat-message-view h-100">
		<template v-if="moduleLoaded">
			<div class="message-container d-flex bg-4 flex-1 rounded-15 overflow-hidden">
				<div class="aside-width-380 d-flex flex-column border-right">
					<chat-sidebar />
				</div>
				<div class="chat-area-wrap flex-1 d-flex">
					<template v-if="!isConversationOpen">
						<chat-area-empty />
					</template>

					<template v-else>
						<chat-area-wrapper />
					</template>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import ChatSidebar from "../components/ChatSidebar";
import ChatAreaEmpty from "../components/ChatAreaEmpty";
import { mapState, mapGetters, mapMutations } from "vuex";

const chatMessengerStoreModule = () => import("@/modules/ChatMessenger/store")

export default {
	name: "index",
	components: {
		ChatAreaEmpty,
		ChatSidebar,
		ChatAreaWrapper: () => import(/* webpackChunkName: "ChatAreaWrapper" */ "../components/ChatAreaWrapper")
	},
	computed: {
		...mapState({
			moduleLoaded: "isDynamicModuleLoaded"
		}),
		/*
		*
		* */
		...mapGetters({
			isConversationOpen: "chatModule/getIsConversationOpen"
		})
	},
	mounted() {
		chatMessengerStoreModule().then(chatMessengerModule => {
			this.$store.registerModule('chatModule', chatMessengerModule.default)

			this.LOADED_DYNAMIC_MODULE(true)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule('chatModule')
		this.LOADED_DYNAMIC_MODULE(false)
	},
	methods: {
		...mapMutations({
			LOADED_DYNAMIC_MODULE: "LOADED_DYNAMIC_MODULE"
		})
	}
}
</script>

<style>
.chat-area-wrap {
	background-image: url('/img/chat-bg-light.svg');
	background-color: var(--chat-area-bg);
	background-position: center;
	background-repeat: repeat;
	background-size: 210px;
}

[v-theme="dark"] .chat-area-wrap {
	background-image: url('/img/chat-bg-dark.svg');
}
</style>
