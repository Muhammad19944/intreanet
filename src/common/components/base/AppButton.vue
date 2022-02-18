<template>
	<v-btn
		v-bind="$attrs"
		v-on="$listeners"
		:color="color"
		dark
		:min-width="minWidth"
		class="rounded-15"
		depressed
	>
		<div
			v-if="$slots.prepend"
			:class="{'mr-1' : $slots.default}"
			class="d-flex"
		>
			<slot name="prepend" />
		</div>
		<span v-if="$slots.default" class="small-2 mr-auto">
			<slot />
		</span>
		<div v-if="$slots.append" class="d-flex ml-2">
			<slot name="append" />
		</div>
	</v-btn>
</template>

<script>
export default {
	name: "AppButton",
	props: {
		color: {
			type: String,
			default: "primary"
		},
		minWidth: {
			type: [Number, String],
			default: 125
		}
	}
}
</script>

<style scoped>

</style>
