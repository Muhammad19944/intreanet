<template>
	<div class="exchangeEmail-view flex-1">
		<template>
			<div class="exchange-view bg-4 rounded-15 d-flex flex-1">
				<div class="aside-width-300 border-right">
					<div class="pa-5 border-bottom">
						<app-button min-width="100%">
							<template #default>
								Написать сообщение
							</template>
							<template #append>
								<v-icon size="20">mdi-email-outline</v-icon>
							</template>
						</app-button>
					</div>

					<div class="pa-5">
						<v-list dense class="content-list py-0">
							<v-list-item
								:ripple="false"
								:to="{name: 'ExchangeEmailInbox'}"
								class="py-2 rounded-lg overflow-hidden mb-2"
								link
							>
								<v-list-item-icon class="mr-2">
									<v-icon>mdi-email-outline</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>
										<span class="small-2 color-text-2 font-500">Входящие</span>
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>

						<v-list dense class="content-list py-0">
							<v-list-item
								:ripple="false"
								:to="{name: 'ExchangeEmailSend'}"
								class="py-2 rounded-lg overflow-hidden mb-2"
								link
							>
								<v-list-item-icon class="mr-2">
									<v-icon>mdi-email-outline</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>
										<span class="small-2 color-text-2 font-500">Отправленные</span>
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>

						<v-list dense class="content-list py-0">
							<v-list-item
								:ripple="false"
								:to="{name: 'ExchangeEmailTrash'}"
								class="py-2 rounded-lg overflow-hidden mb-2"
								link
							>
								<v-list-item-icon class="mr-2">
									<v-icon>mdi-email-outline</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>
										<span class="small-2 color-text-2 font-500">Удаленные</span>
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</div>
				</div>

				<div class="flex-1">
					<router-view />
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "index"
}
</script>
