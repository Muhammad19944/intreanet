<template>
	<div class="form-generator">
		<app-wrapper>
			<template #body>
				<v-row>
					<!-- Рег. номер -->
					<template v-if="inputGeneratesList.includes('registrationNumber')">
						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Рег. номер</span>

								<v-text-field
									hide-details
									outlined
								></v-text-field>
							</div>
						</v-col>
					</template>
					<!-- End Рег. номер -->

					<!-- Исх. номер -->
					<template v-if="inputGeneratesList.includes('originalNumber')">
						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Исх. номер</span>

								<v-text-field
									hide-details
									outlined
								></v-text-field>
							</div>
						</v-col>
					</template>
					<!-- End Исх. номер -->

					<!-- Рег. дата -->
					<template v-if="inputGeneratesList.includes('registrationDate')">
						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Рег. дата</span>

								<app-date-picker with-input />
							</div>
						</v-col>
					</template>
					<!-- End Рег. дата -->

					<!-- Исх. дата -->
					<template v-if="inputGeneratesList.includes('originalDate')">
						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Исх. дата</span>

								<app-date-picker with-input />
							</div>
						</v-col>
					</template>
					<!-- End Исх. дата -->
				</v-row>
			</template>
		</app-wrapper>
	</div>
</template>

<script>
export default {
	name: "FormGenerator",
	props: {
		inputGeneratesList: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>

</style>
