<template>
	<div v-if="conversationUserSelected" class="chat-area-header-view d-flex align-center bg-4">
		<messenger-user-card
			@click="openUserDetailSidebar(true)"
			:item="conversationUserSelected"
			avatar-size="40"
			compact
			:hover="false"
		/>
	</div>
</template>

<script>
import MessengerUserCard from "@/common/components/MessengerUserCard";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "ChatAreaHeader",
	components: {
		MessengerUserCard
	},
	computed: {
		...mapGetters({
			conversationUserSelected: "chatModule/getConversationUserSelected"
		})
	},
	methods: {
		...mapActions({
			openUserDetailSidebar: "chatModule/openUserDetailSidebar"
		})
	}
}
</script>

<style>
.chat-area-header-view {
	height: 65px;
}
</style>
