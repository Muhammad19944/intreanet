<template>
	<div class="empty-chat-area-view w-100 d-flex align-center justify-center">
		<div>
			<v-sheet width="125" height="125" class="rounded-circle mx-auto d-flex align-center justify-center">
				<v-icon size="48">mdi-message-outline</v-icon>
			</v-sheet>

			<div class="bg-4 pa-4 rounded-15 mt-3">
				<span class="text-2 font-500">Start Conversation</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ChatAreaEmpty"
}
</script>

<style>

</style>
