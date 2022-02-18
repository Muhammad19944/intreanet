<template>
	<div class="chat-sidebar-view d-flex flex-column flex-1 p-relative">
		<chat-sidebar-header />

		<chat-sidebar-tabs />

		<template v-if="isSearching">
			<chat-sidebar-header-search-overlay />
		</template>
	</div>
</template>

<script>
import ChatSidebarHeader from "./ChatSidebarHeader";
import ChatSidebarTabs from "./ChatSidebarTabs";

import { mapGetters } from "vuex"

export default {
	name: "ChatSidebar",
	components: {
		ChatSidebarHeader,
		ChatSidebarTabs,
		ChatSidebarHeaderSearchOverlay: () => import("./ChatSidebarHeaderSearchOverlay")
	},
	computed: {
		...mapGetters({
			isSearching: "chatModule/getIsSearching"
		})
	}
}
</script>
