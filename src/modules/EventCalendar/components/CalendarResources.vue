<template>
	<app-wrapper>
		<template v-slot:header>
			<span class="font-500 d-block text-center">Ресурсы для мероприятий</span>
		</template>

		<template v-slot:body>
			<v-menu
				offset-y
			>
				<template v-slot:activator="{ on, attrs }">
					<app-button
						v-bind="attrs"
						v-on="on"
						width="100%"
						height="50"
					>
						<template>
							<span class="font-500 small-2">Создать событие</span>
						</template>
						<template #append>
							<v-icon>mdi-chevron-down</v-icon>
						</template>
					</app-button>
				</template>

				<v-list>
					<v-list-item-group
						color="primary"
					>
						<v-list-item>
							<v-list-item-avatar size="24">
								<v-icon>mdi-star-outline</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="font-500 small-2">Мероприятие</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-list-item>
							<v-list-item-avatar size="24">
								<v-icon>mdi-clipboard-text-outline</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="font-500 small-2">Задача</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-menu>

			<app-date-picker
				full-width
				class="my-5"
			/>

			<div class="app-collapse">
				<v-expansion-panels v-model="panel" focusable>
					<v-expansion-panel>
						<v-expansion-panel-header>
							<span class="font-500 text-2">Мои календари</span>
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							<v-list>
								<v-list-item-group color="primary">
									<v-list-item>
										<v-list-item-avatar size="24">
											<v-icon>mdi-star-outline</v-icon>
										</v-list-item-avatar>
										<v-list-item-content>
											<v-list-item-title>
												<span class="font-500">11.11.2021 - Event name</span>
											</v-list-item-title>
										</v-list-item-content>
									</v-list-item>

									<v-list-item>
										<v-list-item-avatar size="24">
											<v-icon>mdi-clipboard-text-outline</v-icon>
										</v-list-item-avatar>
										<v-list-item-content>
											<v-list-item-title>
												<span class="font-500">11.11.2021 - Event name</span>
											</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div>
		</template>
	</app-wrapper>
</template>

<script>
export default {
	name: "CalendarResources",
	data() {
		return {
			panel: 0
		}
	}
}
</script>

<style scoped>

</style>
