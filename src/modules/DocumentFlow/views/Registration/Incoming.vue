<template>
	<div class="inbox-view d-flex flex-column h-100">
		<div class="d-flex my-5">
			<v-spacer />

			<app-button
				:to="{name: 'DocumentFlowRegistrationCreate'}"
				depressed
				class="mr-2"
			>
				<template #prepend>
					<v-icon size="20" color="var(--text-5)">$vuetify.icons.fileInvoice</v-icon>
				</template>
				<template #default>
					<span class="text-white">Регистрация</span>
				</template>
			</app-button>

			<app-button
				@click="showFilterTemplate"
				depressed
				class="mr-2"
			>
				<template #prepend>
					<v-icon size="20">$vuetify.icons.cogsIcon</v-icon>
				</template>
				<template #default>
					<span class="">Фильтрация</span>
				</template>
			</app-button>

			<app-tooltip top>
				<template #content>
					<app-button
						depressed
						max-width="51"
						min-width="51"
						class="mr-2"
					>
						<template #prepend>
							<v-icon size="20">$vuetify.icons.clipboardPaste</v-icon>
						</template>
					</app-button>
				</template>

				<template #text>Показать за текущий год</template>
			</app-tooltip>

			<app-tooltip top>
				<template #content>
					<app-button
						depressed
						max-width="51"
						min-width="51"
					>
						<template #prepend>
							<v-icon size="20">$vuetify.icons.clipboardPaste</v-icon>
						</template>
					</app-button>
				</template>

				<template #text>Показать всё</template>
			</app-tooltip>
		</div>

		<template v-if="isVisible">
			<form-generator
				:input-generates-list="['registrationDate', 'originalDate']"
				class="mb-7"
			/>
		</template>

		<app-wrapper class="flex-1">
			<template #body>
				<app-table
					:table-head-items="tableListSelect"
					table-width="2000"
				/>
			</template>
		</app-wrapper>

		<div class="d-flex pt-3">
			<app-pagination />
		</div>
	</div>
</template>

<script>
import { TABLE_HEAD_TEXT_LIST } from "@/common/constants";
import { selectFromList } from "@/common/helpers";

export default {
	name: "Incoming",
	components: {
		FormGenerator: () => import(/* webpackChunkName: "FormGenerator" */ "@/common/components/FormGenerator")
	},
	computed: {
		tableListSelect() {
			return selectFromList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], TABLE_HEAD_TEXT_LIST)
		}
	},
	data() {
		return {
			isVisible: false
		}
	},
	methods: {
		showFilterTemplate() {
			this.isVisible = !this.isVisible
		}
	}
}
</script>

<style scoped>

</style>
