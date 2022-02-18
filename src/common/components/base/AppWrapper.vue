<template>
	<div class="app-wrapper bg-4 rounded-20 d-flex flex-column">
		<div v-if="$slots.header" class="wrapper-header pa-5 border-bottom">
			<slot name="header" />
		</div>

		<div
			v-if="$slots.body"
			class="wrapper-body flex-1 overflow-y-auto overflow-x-hidden pa-5"
			:class="{'h-100' : contentHeight}"
			:style="{ 'max-height' : `${bodyMaxHeight}px` }"
		>
			<slot name="body" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AppWrapper",
	props: {
		contentHeight: {
			type: Boolean,
			default: false
		},
		bodyMaxHeight: {
			type: String,
			default: ""
		}
	}
}
</script>

<style>

</style>
