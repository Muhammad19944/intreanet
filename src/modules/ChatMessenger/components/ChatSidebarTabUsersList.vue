<template>
	<div class="tab-users-list-view">
		<template v-for="user in conversationPersonalUsers.results">
			<messenger-user-card
				@click="selected(user)"
				:key="user.id"
				:item="user"
				:class="{
					'selected' : user.id === selectedUser.id
				}"
			/>
		</template>
	</div>
</template>

<script>
import MessengerUserCard from "@/common/components/MessengerUserCard";
import { mapGetters, mapActions } from "vuex"

export default {
	name: "ChatSidebarTabUsersList",
	components: {
		MessengerUserCard
	},
	data() {
		return {
			selectedUser: {}
		}
	},
	computed: {
		...mapGetters({
			conversationPersonalUsers: "chatModule/getConversationPersonalUsers"
		})
	},
	created() {
		this.fetchConversationUsersList()
	},
	methods: {
		...mapActions({
			fetchConversationUsersList: "chatModule/fetchConversationUsersList",
			openPrivateChat: "chatModule/openPrivateChat",
		}),
		/*
		*
		* */
		selected(user) {
			this.selectedUser = user
			this.openPrivateChat(user)
		}
	}
}
</script>

<style>
</style>
