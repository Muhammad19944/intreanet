<template>
	<div class="document-registration-view d-flex flex-column h-100">
		<app-wrapper>
			<template #body>
				<div class="d-flex">
					<template v-for="item in selectList">
						<v-sheet
							@click="visible = item.id"
							:color="item.colors.secondary"
							height="100"
							width="100"
							class="rounded-15 d-flex align-center flex-column mr-3 text-center pointer"
						>
							<v-icon
								:color="item.colors.primary"
								size="24"
								class="mt-6"
							>{{ item.icon }}</v-icon>
							<span class="font-600 small-3 text-2 mt-2">{{ item.text }}</span>
						</v-sheet>
					</template>
				</div>
			</template>
		</app-wrapper>

		<template v-if="visible === 1">
			<incoming />
		</template>

		<template v-if="visible === 2">
			<inner />
		</template>

		<template v-if="visible === 3">
			<outbox />
		</template>
	</div>
</template>

<script>
import { selectFromList } from "@/common/helpers"
import { DOCUMENT_TEXT_LIST } from "@/common/constants";

export default {
	name: "index",
	components: {
		Incoming: () => import(/* webpackChunkName: "Inbox" */ "./Incoming"),
		Inner: () => import(/* webpackChunkName: "Inner" */ "./Inner.vue"),
		Outbox: () => import(/* webpackChunkName: "Outbox" */ "./Outbox")
	},
	data() {
		return {
			visible: 1
		}
	},
	computed: {
		selectList() {
			return selectFromList([1, 2, 3], DOCUMENT_TEXT_LIST)
		}
	}
}
</script>

<style scoped>

</style>
