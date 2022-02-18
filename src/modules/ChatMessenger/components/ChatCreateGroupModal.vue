<template>
	<v-dialog
		v-model="dialog"
		max-width="400"
	>
		<template v-slot:activator="{ on, attrs }">
			<app-tooltip top>
				<template #content>
					<app-button
						min-width="53"
						width="53"
						height="53"
						v-bind="attrs"
						v-on="on"
						class="rounded-circle"
					>
						<template #default>
							<v-icon>mdi-account-group-outline</v-icon>
						</template>
					</app-button>
				</template>

				<template #text>
					Создать группу
				</template>
			</app-tooltip>
		</template>

		<!-- Шаг 1 -->
		<template v-if="dialogStep === 'first'">
			<div class="bg-3 pa-7">
				<div class="d-flex align-center">
					<v-avatar
						color="primary"
						size="64"
						class="mr-5"
					>
						<v-icon color="#fff" size="28">mdi-camera</v-icon>
					</v-avatar>

					<div class="app-input flex-1">
						<v-text-field
							v-model="createChatModel.title"
							hide-details
							outlined
							autofocus
							placeholder="Название группы"
						></v-text-field>
					</div>
				</div>

				<div class="mt-6 text-right">
					<app-button @click="dialogStep = 'second'" min-width="110" width="110">
						<template #default>
							Далее
						</template>

						<template #append>
							<v-icon>mdi-chevron-right</v-icon>
						</template>
					</app-button>
				</div>
			</div>
		</template>
		<!-- / Шаг 1 -->

		<!-- Шаг 2 -->
		<template v-if="dialogStep === 'second'">
			<div class="bg-3">
				<div class="pa-4 border-bottom">
					<span class="d-block font-500 text-2 mb-6">Добавить участников</span>

					<div class="app-input flex-1">
						<v-text-field
							hide-details
							outlined
							autofocus
							placeholder="Поиск"
						>
							<template #prepend-inner>
								<v-icon
									size="22"
									class="mr-1"
								>mdi-magnify</v-icon>
							</template>
						</v-text-field>
					</div>
				</div>

				<perfect-scrollbar class="py-2 border-bottom" style="height: 500px">
					<div
						v-for="i in 21"
						class="chat-user-item d-flex align-center pointer text-decoration-none pa-3 transition-all"
					>
						<div class="chat-user-left">
							<v-badge
								bordered
								bottom
								dot
								color="var(--primary-2)"
								offset-x="10"
								offset-y="10"
							>
								<v-avatar size="48">
									<img
										src="@/assets/img/avatar.jpg"
										alt="Avatar"
										class="object-cover"
									/>
								</v-avatar>
							</v-badge>
						</div>

						<div class="flex-1 ml-3 text-truncate">
							<div class="d-flex align-center font-500">
								<span class="mr-2 text-truncate flex-1">Рахматов Б.А.</span>
								<span class="ml-auto small-2 text-3">11:40</span>
							</div>

							<div class="d-flex align-center">
								<span class="text-3 small-2 text-truncate flex-1 mr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea iste laboriosam optio quos ut.</span>
								<v-sheet
									color="var(--primary-1)"
									min-width="22"
									height="22"
									dark
									class="rounded-15 d-flex align-center justify-center"
								>
									<span class="small-3 px-2">4</span>
								</v-sheet>
							</div>
						</div>
					</div>
				</perfect-scrollbar>

				<div class="pa-4 pt-0 mt-6 text-right">
					<app-button
						color="var(--primary-4)"
						min-width="90"
						width="90"
						class="mr-3"
					>
						<template #default>
							Отмена
						</template>
					</app-button>

					<app-button @click="createChatGroup(createChatModel)" min-width="90" width="90">
						<template #default>
							Создать
						</template>
					</app-button>
				</div>
			</div>
		</template>
		<!-- / Шаг 2 -->
	</v-dialog>
</template>

<script>
import { mapActions } from "vuex"

export default {
	name: "ChatCreateGroupModal",
	data() {
		return {
			dialog: false,
			dialogStep: "first",
			createChatModel: {
				title: "",
				members: []
			}
		}
	},
	methods: {
		...mapActions({
			createChatGroup: "chatModule/createChatGroup"
		})
	}
}
</script>
