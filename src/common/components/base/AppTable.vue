<template>
	<div class="app-table overflow-x-auto">
		<v-simple-table :style="{'min-width': `${tableWidth}px`}">
			<template v-slot:default>
				<thead>
					<tr>
						<template v-for="items in tableHeadItems">
							<th
								:key="items.title"
								:width="items.width"
								class="text-left"
							>
								{{ items.title }}
							</th>
						</template>
					</tr>
				</thead>
				<tbody>
					<slot name="tableBody" />
				</tbody>
			</template>
		</v-simple-table>
	</div>
</template>

<script>
export default {
	name: "AppTable",
	props: {
		tableWidth: {
			type: [String, Number],
			default: "auto"
		},
		tableHeadItems: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>

</style>
