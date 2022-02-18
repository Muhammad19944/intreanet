<template>
	<v-tooltip v-bind="$attrs">
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<slot name="content" />
			</div>
		</template>

		<span class="small-3 font-500">
			<slot name="text" />
		</span>
	</v-tooltip>
</template>

<script>
export default {
	name: "AppTooltip"
}
</script>

<style>

</style>
