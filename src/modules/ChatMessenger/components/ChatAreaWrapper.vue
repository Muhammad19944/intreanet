<template>
	<div class="chat-area-wrapper-view d-flex flex-column flex-1 p-relative">
		<chat-area-header />

		<chat-area />

		<chat-area-footer />

		<transition name="fade">
			<template v-if="isUserDetailSidebarOpen">
				<chat-sidebar-about-user />
			</template>
		</transition>
	</div>
</template>

<script>
import ChatAreaHeader from "./ChatAreaHeader";
import ChatArea from "./ChatArea";
import ChatAreaFooter from "./ChatAreaFooter";
import { mapGetters } from "vuex"

export default {
	name: "ChatAreaWrapper",
	components: {
		ChatAreaHeader,
		ChatArea,
		ChatAreaFooter,
		ChatSidebarAboutUser: () => import(/* webpackChunkName: "ChatSidebarAboutUser" */ "./ChatSidebarAboutUser")
	},
	computed: {
		...mapGetters({
			isUserDetailSidebarOpen: "chatModule/getIsUserDetailSidebarOpen"
		})
	}
}
</script>

<style>

</style>
