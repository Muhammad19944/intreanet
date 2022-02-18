<template>
	<div class="user-profile-view h-100">
		<template>
			<div class="gap-medium d-flex h-100">
				<div class="flex-1">
					<div class="d-flex gap-medium">
						<div class="aside-width-300">
							<app-wrapper class="mb-6">
								<template #body>
									<v-responsive :aspect-ratio="4 / 5">
										<img
											src="@/assets/img/avatar.jpg"
											alt="Avatar image"
											class="object-cover p-absolute rounded-15"
										/>
									</v-responsive>

									<app-button
										width="100%"
										height="50"
										class="mt-5"
									>
										<template #prepend>
											<v-icon>mdi-camera</v-icon>
										</template>
										<template #default>
											<span class="font-500 ml-1">Изменить фото</span>
										</template>
									</app-button>
								</template>
							</app-wrapper>

							<app-wrapper>
								<template #header>
									<h3 class="font-500 text-2 font-weight-thin line-base">Рахматов Б.А</h3>
								</template>
								<template #body>
									<div class="d-flex mb-5">
										<v-icon size="22">
											mdi-office-building-marker-outline
										</v-icon>

										<span class="font-500 text-2 ml-2 small-2">Центр банковских операций</span>
									</div>

									<div class="d-flex mb-5">
										<v-icon size="22">
											mdi-briefcase-outline
										</v-icon>

										<span class="font-500 text-2 ml-2 small-2">Начальник департамента</span>
									</div>

									<div class="d-flex">
										<v-icon size="22">
											mdi-phone-outline
										</v-icon>

										<span class="font-500 text-2 ml-2 small-2">+99890 418 35 35</span>
									</div>
								</template>
							</app-wrapper>
						</div>

						<div class="flex-1">2</div>
					</div>
				</div>

				<app-wrapper class="aside-width-300">
					<template #body>
						asd
					</template>
				</app-wrapper>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "UserProfile"
}
</script>

<style scoped>

</style>
