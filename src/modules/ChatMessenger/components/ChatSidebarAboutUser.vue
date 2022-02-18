<template>
	<div
		@click="openUserDetailSidebar(false)"
		class="chat-sidebar-about-user p-absolute w-100 h-100 d-flex overflow-y-auto"
	>
		<template v-if="chatRoleMember">
			<div class="aside-width-300 ml-auto bg-4 py-12 px-5">
				<div class="d-flex flex-column align-center mb-5">
					<v-badge
						bordered
						bottom
						dot
						color="var(--primary-2)"
						offset-x="10"
						offset-y="10"
					>
						<v-avatar :color="chatRoleMember.user.color" size="80">
							<template v-if="chatRoleMember.user.avatar">
								<img
									:src="chatRoleMember.user.avatar.url"
									alt="Avatar"
									class="object-cover"
								/>
							</template>

							<template v-else>
								<span class="text-white heading-7">{{ chatRoleMember.user.last_name[0] }}</span>
							</template>
						</v-avatar>
					</v-badge>

					<span class="font-500 text-2 mt-3 mb-1">
						{{ chatRoleMember.user.last_name }}
						{{ chatRoleMember.user.first_name[0] }}.
						{{ chatRoleMember.user.father_name[0] }}.
					</span>
					<span class="font-500 small-2 text-3">{{ chatRoleMember.user.position }}</span>
				</div>

<!--				<div class="mt-10">-->
<!--					<span class="d-block text-3 small-2 mb-2">Обо мне</span>-->
<!--					<span class="small-2 text-2"></span>-->
<!--				</div>-->

				<div class="mt-10">
					<span class="d-block text-3 small-2 mb-2">Персональная информация</span>

					<div class="d-flex mb-5">
						<v-icon size="22">
							mdi-office-building-marker-outline
						</v-icon>

						<span class="font-500 text-2 ml-2 small-2">{{ chatRoleMember.user.dep_name }}</span>
					</div>

					<div class="d-flex mb-5">
						<v-icon size="22">
							mdi-deskphone
						</v-icon>

						<span class="font-500 text-2 ml-2 small-2">{{ chatRoleMember.user.cisco }}</span>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
	name: "ChatSidebarAboutUser",
	computed: {
		...mapGetters({
			conversationUserSelected: "chatModule/getConversationUserSelected",
			currentUser: "auth/getCurrentUser"
		}),
		/*
		*
		* */
		chatRoleMember() {
			return this.conversationUserSelected.chat.find(item => item.user.id !== this.currentUser.id)
		}
	},
	methods: {
		...mapActions({
			openUserDetailSidebar: "chatModule/openUserDetailSidebar"
		})
	}
}
</script>

<style>
.chat-sidebar-about-user {
	background: rgb(22 28 39 / 50%);
}
</style>
