<template>
	<v-navigation-drawer
		v-model="drawerSettings.drawer"
		:mini-variant="drawerSettings.mini"
		:permanent="drawerSettings.permanent"
		app
		width="275"
		class="app-drawer"
	>
		<div class="h-100 d-flex flex-column">
			<div class="logo-list-item">
				<v-list-item class="px-2 py-2">
					<router-link to="/" class="drawer-logo d-block mx-auto">
						Image logo
					</router-link>
				</v-list-item>
			</div>

			<v-list dense class="content-list py-0">
				<div class="px-4 mt-4">
					<template v-for="item in menuPrimaryList">
						<!-- Checking if have child items-->
						<template v-if="item.children">
							<div class="app-collapse mb-2">
								<v-expansion-panels class="list-item-expand" focusable>
									<v-expansion-panel>
										<v-expansion-panel-header class="pa-2 rounded-lg">
											<v-list-item
												:ripple="false"
												class="overflow-hidden pl-1"
											>
												<v-list-item-icon class="mr-2">
													<v-icon>{{ item.icon }}</v-icon>
												</v-list-item-icon>

												<v-list-item-content>
													<span class="small-2 color-text-2 font-500">{{ item.text }}</span>
												</v-list-item-content>
											</v-list-item>
										</v-expansion-panel-header>

										<v-expansion-panel-content>
											<template v-for="subItem in item.children">
												<v-list-item
													:key="subItem.text"
													:ripple="false"
													:to="{ name: subItem.url }"
													class="py-2 rounded-lg overflow-hidden mt-2"
													link
												>
													<v-list-item-icon class="mr-2">
														<v-icon>{{ subItem.icon }}</v-icon>
													</v-list-item-icon>

													<v-list-item-content>
														<v-list-item-title>
															<span class="small-2 color-text-2 font-500">{{ subItem.text }}</span>
														</v-list-item-title>
													</v-list-item-content>
												</v-list-item>
											</template>
										</v-expansion-panel-content>
									</v-expansion-panel>
								</v-expansion-panels>
							</div>
						</template>

						<template v-else>
							<v-list-item
								:key="item.text"
								:ripple="false"
								:to="{ name: item.url }"
								class="py-2 rounded-lg overflow-hidden mb-2"
								link
							>
								<v-list-item-icon class="mr-2">
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>
										<span class="small-2 color-text-2 font-500">{{ item.text }}</span>
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</template>
					</template>
				</div>
			</v-list>

			<div class="mt-auto mb-1">
				<v-list dense class="content-list py-0">
					<div class="px-4 mt-4">
						<v-list-item
							:ripple="false"
							:to="{name: 'MainChat'}"
							class="py-2 rounded-lg overflow-hidden mb-2"
							link
						>
							<v-list-item-icon class="mr-2">
								<v-icon>mdi-message-outline</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>
									<span class="small-2 color-text-2 font-500">Chat messenger</span>
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</div>
				</v-list>
			</div>
		</div>
	</v-navigation-drawer>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			drawerSettings: {
				drawer: true,
				mini: false,
				permanent: true
			},
			menuPrimaryList: [
				{
					text: 'Dashboard',
					url: 'MainDashboard',
					icon: 'mdi-home-outline',
				},
				{
					text: 'Event calendar',
					url: 'MainEventCalendar',
					icon: 'mdi-calendar-month-outline',
				},
				{
					text: 'Документооборот',
					icon: 'mdi-text-box-outline',
					children: [
						{
							text: "Главная",
							url: "DocumentFlowHome",
							icon: "mdi-home-outline",
						},
						{
							text: "Регистрация",
							url: "DocumentFlowRegistration",
							icon: "mdi-clipboard-edit-outline",
						}
					]
				},
				{
					text: 'Exchange',
					url: 'MainExchangeEmail',
					icon: 'mdi-email-outline',
				},
			],
		}
	},
	mounted() {
		if (this.$vuetify.breakpoint.thresholds.sm < 965) {
			this.drawerSettings.drawer = false;
			this.drawerSettings.permanent = false;
		}
	},
}
</script>

<style>
.logo-list-item {
	background: var(--bg-3);
}
</style>
