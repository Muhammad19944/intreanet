<template>
	<div ref="chatArea" class="chat-area-view flex-1 overflow-y-auto">
		<div class="chat-area-content d-flex flex-column px-4">
			<template v-if="conversationUserMessages">
				<template v-for="message in conversationUserMessages.results">
					<div
						:key="message.message_id ? message.message_id : message.id"
						class="chatting-user d-flex mt-4 mb-6"
						:class="{'align-self-end': message.sender.id === currentUser.id}"
					>
						<template v-if="message.sender">
							<template v-if="message.sender.id === currentUser.id">
								<div
									class="chatting-comments"
									:class="{'mr-3': message.sender.id === currentUser.id}"
								>
									<div class="bg-3 rounded-15 pa-3">
										<span v-html="message.text" class="d-block text-2 small-2"></span>
											<span class="d-block text-right small-3 font-500 text-2">
											{{ message.created_date | filterHHmm }}
										</span>
									</div>
								</div>

								<div>
									<v-badge
										bordered
										bottom
										dot
										color="var(--primary-2)"
										offset-x="10"
										offset-y="10"
									>
										<v-avatar :color="message.sender.color" size="40">
											<template v-if="message.sender.avatar">
												<img
													:src="message.sender.avatar.url"
													alt="Avatar"
													class="object-cover"
												/>
											</template>

											<template v-else>
												<span class="text-white">{{ message.sender.last_name[0] }}</span>
											</template>
										</v-avatar>
									</v-badge>
								</div>
							</template>

							<template v-else>
								<div>
									<v-badge
										bordered
										bottom
										dot
										color="var(--primary-2)"
										offset-x="10"
										offset-y="10"
									>
										<v-avatar :color="message.sender.color" size="40">
											<template v-if="message.sender.avatar">
												<img
													:src="message.sender.avatar.url"
													alt="Avatar"
													class="object-cover"
												/>
											</template>

											<template v-else>
												<span class="text-white">{{ message.sender.last_name[0] }}</span>
											</template>
										</v-avatar>
									</v-badge>
								</div>

								<div class="chatting-comments ml-3">
									<div class="bg-3 rounded-15 pa-3">
										<span v-html="message.text" class="d-block text-2 small-2"></span>
											<span class="d-block text-right small-3 font-500 text-2">
											{{ message.created_date | filterHHmm }}
										</span>
									</div>
								</div>
							</template>
						</template>
					</div>
				</template>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
	name: "ChatArea",
	computed: {
		...mapGetters({
			conversationUserMessages: "chatModule/getConversationUserMessages",
			currentUser: "auth/getCurrentUser",
			chatAreaRef: "chatModule/getChatAreaRef"
		})
	},
	mounted() {
		this.scrollToBottom()
	},
	updated() {
		this.scrollToBottom()
	},
	methods: {
		...mapActions({
			chatAreaInstance: "chatModule/chatAreaInstance"
		}),
		/*
		*
		* */
		scrollToBottom() {
			setTimeout(() => {
				const { chatArea } = this.$refs

				this.chatAreaInstance(chatArea)
			}, 1000)
		}
	}
}
</script>

<style>
.chat-area-content {
	/*height: 1px;*/
}

.chatting-comments {
	min-width: 100px;
	max-width: 540px;
}

.chatting-comments > div:not(:last-child) {
	margin-bottom: 12px;
}
</style>
