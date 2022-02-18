<template>
	<div
		v-on="$listeners"
		v-bind="$attrs"
		@click="$emit('emit:up', item)"
		class="chat-user-item d-flex align-center pointer text-decoration-none pa-3 transition-all"
		:class="{
			'rounded-lg' : rounded,
			'hoverable' : hover
		}"
	>
		<template v-if="item.chat">
			<template v-if="chatRoleMember.user">
				<div :style="{'width': `${avatarSize}px`}">
					<v-badge
						bordered
						bottom
						dot
						color="var(--primary-2)"
						offset-x="10"
						offset-y="10"
					>
						<v-avatar :color="chatRoleMember.user.color" :size="avatarSize">
							<template v-if="chatRoleMember.user.avatar">
								<img
									:src="chatRoleMember.user.avatar.url"
									alt="Avatar"
									class="object-cover"
								/>
							</template>

							<template v-else>
								<span class="text-white">{{ chatRoleMember.user.last_name[0] }}</span>
							</template>
						</v-avatar>
					</v-badge>
				</div>

				<div class="flex-1 ml-3 text-truncate">
					<template v-if="compact">
						<div class="d-flex align-center font-500">
							<span class="mr-2 text-truncate flex-1">
								{{ chatRoleMember.user.last_name }}
								{{ chatRoleMember.user.first_name }}
								{{ chatRoleMember.user.father_name }}
							</span>
						</div>
					</template>

					<template v-else>
						<div class="d-flex align-center font-500">
							<span class="mr-2 text-truncate flex-1">
								{{ chatRoleMember.user.last_name }}
								{{ chatRoleMember.user.first_name[0] }}.
								{{ chatRoleMember.user.father_name[0] }}.
							</span>
							<template v-if="item.last_message_author">
								<span class="ml-auto small-2 text-3">{{ item.last_message_time | filterHHmm }}</span>
							</template>
						</div>

						<div class="d-flex align-center">
							<template v-if="item.last_message_author">
								<span class="text-3 small-2 text-truncate flex-1 mr-2">
									<span class="font-500 primary-text mr-1">{{ item.last_message_author.last_name }}:</span>
									<span v-text="item.last_message_text.replaceAll('<br />', ' ')"></span>
								</span>

<!--								<v-sheet-->
<!--									color="var(&#45;&#45;primary-1)"-->
<!--									min-width="22"-->
<!--									height="22"-->
<!--									dark-->
<!--									class="rounded-15 d-flex align-center justify-center"-->
<!--								>-->
<!--									<span class="small-3 px-2">4</span>-->
<!--								</v-sheet>-->
							</template>
						</div>
					</template>
				</div>
			</template>
		</template>

		<template v-else>
			<div :style="{'width': `${avatarSize}px`}">
				<v-badge
					bordered
					bottom
					dot
					color="var(--primary-2)"
					offset-x="10"
					offset-y="10"
				>
					<v-avatar :color="item.color" :size="avatarSize">
						<template v-if="item.avatar">
							<img
								:src="item.avatar.url"
								alt="Avatar"
								class="object-cover"
							/>
						</template>

						<template v-else>
							<span class="text-white">{{ item.last_name[0] }}</span>
						</template>
					</v-avatar>
				</v-badge>
			</div>

			<div class="flex-1 ml-3 text-truncate">
				<template v-if="compact">
					<div class="d-flex align-center font-500">
						<span class="mr-2 text-truncate flex-1">
							{{ item.last_name }}
							{{ item.first_name }}
							{{ item.father_name }}
						</span>
					</div>
				</template>

				<template v-else>
					<div class="d-flex align-center font-500">
						<span class="mr-2 text-truncate flex-1">
							{{ item.last_name }}
							{{ item.first_name[0] }}.
							{{ item.father_name[0] }}.
						</span>

						<template v-if="item.last_message_author">
							<span class="ml-auto small-2 text-3">{{ item.last_message_time | filterHHmm }}</span>
						</template>
					</div>

					<div class="d-flex align-center">
						<template v-if="item.last_message_author">
							<span class="text-3 small-2 text-truncate flex-1 mr-2">
								<span class="font-500 primary-text">{{ item.last_message_author.last_name }}:</span>
								{{ item.last_message_text }}
							</span>

<!--							<v-sheet-->
<!--								color="var(&#45;&#45;primary-1)"-->
<!--								min-width="22"-->
<!--								height="22"-->
<!--								dark-->
<!--								class="rounded-15 d-flex align-center justify-center"-->
<!--							>-->
<!--								<span class="small-3 px-2">4</span>-->
<!--							</v-sheet>-->
						</template>
					</div>
				</template>
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: "MessengerUserCard",
	props: {
		item: {
			type: Object,
			default: () => {}
		},
		rounded: {
			type: Boolean,
			default: true
		},
		selectable: {
			type: Boolean,
			default: false
		},
		compact: {
			type: Boolean,
			default: false
		},
		avatarSize: {
			type: [Number, String],
			default: 48
		},
		hover: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		}),
		/*
		*
		* */
		chatRoleMember() {
			return this.item.chat.find(item => item.user.id !== this.currentUser.id)
		}
	}
}
</script>

<style>
.hoverable:hover,
.selected {
	background: var(--bg-3);
}

.chat-user-item.selected {
	background: var(--secondary-1);
}
</style>
