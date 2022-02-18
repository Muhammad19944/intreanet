<template>
	<div class="chat-sidebar-header d-flex align-center border-bottom px-4">
		<div class="d-flex align-center w-100">
			<v-badge
				bordered
				bottom
				dot
				color="var(--primary-2)"
				offset-x="10"
				offset-y="10"
			>
				<v-avatar :color="currentUser.color" size="42">
					<template v-if="currentUser.avatar">
						<img
							:src="currentUser.avatar.url"
							alt="avatar"
							class="object-cover"
						/>
					</template>

					<template v-else>
						<span class="text-white">{{ currentUser.last_name[0] }}</span>
					</template>
				</v-avatar>
			</v-badge>

			<div class="app-input flex-1 ml-4">
				<v-text-field
					@input="debounce(['/chats/search/', '/user/search/for_chat/'])"
					v-model="search"
					hide-details
					outlined
					rounded
					dense
					clearable
					autofocus
					placeholder="Поиск ..."
				>
					<template #prepend-inner>
						<v-icon
							size="20"
							class="ml-n2 mr-1"
							style="transform: translateY(2px)"
						>mdi-magnify</v-icon>
					</template>
				</v-text-field>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { debounce } from "lodash/function";

export default {
	name: "ChatSidebarHeader",
	data() {
		return {
			isSearching: false,
			search: ""
		}
	},
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	methods: {
		...mapMutations({
			TOGGLE_SEARCH_OVERLAY : "chatModule/TOGGLE_SEARCH_OVERLAY",
			LOADING: "LOADING"
		}),
		/*
		*
		* */
		debounce(api) {
			if(!this.search) {
				this.TOGGLE_SEARCH_OVERLAY(false)

				return false
			}

			this.TOGGLE_SEARCH_OVERLAY(true)
			this.LOADING(true)

			this.trigger(api)
		},
		/*
		*
		* */
		trigger: debounce(function(api) {
			this.$store.dispatch("chatModule/fetchSearchUsers", {
				api,
				value: this.search
			}).then(() => {
				this.LOADING(false)
			})
		}, 500)
	}
}
</script>

<style>
.chat-sidebar-header {
	height: 66px;
}
</style>
