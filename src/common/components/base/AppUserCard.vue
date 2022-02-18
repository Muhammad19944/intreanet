<template>
	<div class="pa-4 rounded-15 border-all">
		<div class="d-flex mb-3">
			<v-avatar size="52">
				<v-img src="@/assets/img/avatar.jpg" />
			</v-avatar>

			<div class="ml-3">
				<span class="font-600 d-block small-2 mb-1 text-2">Рахматов Б.А.</span>

				<v-chip small color="var(--secondary-2)">
					<div class="d-flex">
						<span class="success-text mr-2">Поздравляем</span>
						<v-img src="@/assets/img/confetti.svg" alt="Icon" width="15" />
					</div>
				</v-chip>
			</div>
		</div>

		<div>
			<span class="d-block font-500 small-3 mt-2 text-2">
				<span class="font-600">Дата рождения:</span>
				14 января
			</span>

			<span class="d-block font-500 small-3 mt-2 text-2">
				<span class="font-600">Подразделение:</span>
				Центр банковских операций
			</span>

			<span class="d-block font-500 small-3 mt-2 text-2">
				<span class="font-600">Должность:</span>
				Начальник департамента
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppUserCard"
}
</script>

<style scoped>

</style>
