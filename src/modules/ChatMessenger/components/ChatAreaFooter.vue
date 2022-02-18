<template>
	<div class="chat-area-footer-view d-flex align-end bg-4 pa-2">
		<app-button min-width="43">
			<template #default>
				<v-icon style="transform: rotate(33deg)">mdi-paperclip</v-icon>
			</template>
		</app-button>

		<v-textarea
			@keydown.enter.exact="sendByEnter"
			v-model="message"
			outlined
			hide-details
			auto-grow
			rows="1"
			row-height="10"
			autofocus
			placeholder="Введите свое сообщение"
			class="chat-textarea font-500 mx-4"
		>
		</v-textarea>

		<app-button @click="send">
			<template #default>
				<span>Отправить</span>
			</template>
			<template #append>
				<v-icon size="20">mdi-send</v-icon>
			</template>
		</app-button>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: "ChatAreaFooter",
	data() {
		return {
			message: "",
			keysPressed: {}
		}
	},
	computed: {
		...mapGetters({
			conversationOpenWithUserSelect: "chatModule/getConversationOpenWithUserSelect",
			chatSocket: "socket/getChatSocket"
		})
	},
	methods: {
		send() {
			if(!this.message.trim()) {
				return false
			}

			this.chatSocket.onMessageSend({
				command: "new_message",
				text: this.message.replaceAll("\n", "<br />"),
				chat_type: this.conversationOpenWithUserSelect.type,
				chat_id: this.conversationOpenWithUserSelect.id
			})

			this.message = ""
		},

		sendByEnter(event) {
			event.preventDefault()
			event.stopImmediatePropagation()

			if(!this.message.trim()) {
				return false
			}

			this.send()
		}
	},
}
</script>

<style>
.chat-area-footer-view {
	min-height: 60px;
}

.chat-textarea {
	max-height: 350px;
	overflow-y: auto;
}

.chat-textarea .v-input__slot {
	min-height: 43px !important;
}

.chat-textarea textarea {
	font-size: 14px;
	margin-top: 7px !important;
}
</style>
