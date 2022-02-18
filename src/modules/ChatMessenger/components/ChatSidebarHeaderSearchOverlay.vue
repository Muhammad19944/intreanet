<template>
	<div
		class="chat-sidebar-header-search p-absolute w-100 bg-4 transition-fast-in-fast-out overflow-y-auto"
		:class="{'active': isSearching}"
	>
		<template v-if="isLoading">
			<app-loader full-width />
		</template>

		<template v-else>
			<template v-if="chatsSearchList">
				<!-- Написанное пользователи -->
				<div class="pa-2">
					<template v-for="user in chatsSearchList.first.results">
						<messenger-user-card
							@click="openPrivateChat(user)"
							:item="user"
							:key="user.id"
						/>
					</template>
				</div>
				<!-- / Написанное пользователи -->

				<!-- Результаты общего поиска -->
				<div class="bg-3 py-2 px-3 p-relative">
					<span class="font-500 text-2 small-2">Результаты общего поиска</span>
				</div>

				<div class="pa-2">
					<template v-for="user in chatsSearchList.second.results">
						<messenger-user-card
							@click="startPrivateChat(user)"
							:item="user"
							:key="user.id"
						/>
					</template>

<!--					<div class="text-center my-1">-->
<!--						<app-button>-->
<!--							<template #prepend>-->
<!--								<v-icon size="22">mdi-cloud-download-outline</v-icon>-->
<!--							</template>-->
<!--							<template>-->
<!--								Загрузить еще-->
<!--							</template>-->
<!--						</app-button>-->
<!--					</div>-->
				</div>
				<!-- / Результаты общего поиска -->

				<!-- Найденные сообщение -->
<!--				<div class="bg-3 py-2 px-3 p-relative">-->
<!--					<span class="font-500 text-2 small-2">Найдено 3 сообщение</span>-->
<!--				</div>-->

<!--				<div class="pa-2">-->
<!--					<router-link-->
<!--						v-for="i in 2"-->
<!--						:to="{name: 'MainChatID', params: { id: i + 5 }}"-->
<!--						class="chat-user-item d-flex align-center text-decoration-none pa-3 transition-all rounded-lg"-->
<!--					>-->
<!--						<div class="chat-user-left">-->
<!--							<v-badge-->
<!--								bordered-->
<!--								bottom-->
<!--								dot-->
<!--								color="var(&#45;&#45;primary-2)"-->
<!--								offset-x="10"-->
<!--								offset-y="10"-->
<!--							>-->
<!--								<v-avatar size="48">-->
<!--									<img-->
<!--										src="@/assets/img/avatar.jpg"-->
<!--										alt="Avatar"-->
<!--										class="object-cover"-->
<!--									/>-->
<!--								</v-avatar>-->
<!--							</v-badge>-->
<!--						</div>-->

<!--						<div class="flex-1 ml-3 text-truncate">-->
<!--							<div class="d-flex align-center font-500">-->
<!--								<span class="mr-2 text-truncate flex-1">Рахматов Б.А.</span>-->
<!--								<span class="ml-auto small-2 text-3">11:40</span>-->
<!--							</div>-->

<!--							<div class="d-flex align-center">-->
<!--								<span class="text-3 small-2 text-truncate flex-1 mr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea iste laboriosam optio quos ut.</span>-->
<!--								<v-sheet-->
<!--									color="var(&#45;&#45;primary-1)"-->
<!--									min-width="22"-->
<!--									height="22"-->
<!--									dark-->
<!--									class="rounded-15 d-flex align-center justify-center"-->
<!--								>-->
<!--									<span class="small-3 px-2">4</span>-->
<!--								</v-sheet>-->
<!--							</div>-->
<!--						</div>-->
<!--					</router-link>-->

<!--					<div class="text-center my-1">-->
<!--						<app-button>-->
<!--							<template #prepend>-->
<!--								<v-icon size="22">mdi-cloud-download-outline</v-icon>-->
<!--							</template>-->
<!--							<template>-->
<!--								Загрузить еще-->
<!--							</template>-->
<!--						</app-button>-->
<!--					</div>-->
<!--				</div>-->
				<!-- / Найденные сообщение -->
			</template>
		</template>
	</div>
</template>

<script>
import MessengerUserCard from "@/common/components/MessengerUserCard";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "ChatSidebarHeaderSearchOverlay",
	components: {
		MessengerUserCard
	},
	computed: {
		...mapGetters({
			isSearching: "chatModule/getIsSearching",
			chatsSearchList: "chatModule/getChatsSearchList",
			isLoading: "getLoading"
		}),
	},
	methods: {
		...mapActions({
			startPrivateChat: "chatModule/startPrivateChat",
			openPrivateChat: "chatModule/openPrivateChat",
		})
	}
}
</script>

<style>
.chat-sidebar-header-search {
	bottom: 0;
	left: 0;
	height: calc(100% - 66px);
	transform: translateY(100%);
}

.chat-sidebar-header-search.active {
	transform: translateY(0%);
}
</style>
