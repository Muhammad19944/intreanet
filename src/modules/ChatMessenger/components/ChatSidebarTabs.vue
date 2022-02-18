<template>
	<div class="chat-sidebar-tabs d-flex flex-column flex-1 scrolled">
		<v-tabs
			v-model="tab"
			center-active
			slider-size="4"
			class="border-bottom px-1"
			style="flex: initial"
		>
			<v-tab>
				<span class="font-500 text-capitalize">Личные</span>
			</v-tab>
			<v-tab>
				<span class="font-500 text-capitalize">Группы</span>
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab" class="flex-1 overflow-y-auto">
			<v-tab-item class="pa-2">
				<chat-sidebar-tab-users-list />
			</v-tab-item>

			<v-tab-item class="pa-2">
				<chat-sidebar-tab-groups-list />
			</v-tab-item>
		</v-tabs-items>

		<div class="p-absolute" style="bottom: 15px; right: 25px">
			<chat-create-group-modal />
		</div>
	</div>
</template>

<script>
import ChatSidebarTabUsersList from "./ChatSidebarTabUsersList";
import ChatSidebarTabGroupsList from "./ChatSidebarTabGroupsList";
import ChatCreateGroupModal from "./ChatCreateGroupModal";

export default {
	name: "ChatSidebarTabs",
	components: {
		ChatSidebarTabUsersList,
		ChatSidebarTabGroupsList,
		ChatCreateGroupModal
	},
	data() {
		return {
			tab: null
		}
	}
}
</script>

<style>
.scrolled .v-window__container {
	height: 1px;
}
</style>
