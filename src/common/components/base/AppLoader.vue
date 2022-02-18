<template>
	<div :class="{'full-width': fullWidth}">
		<v-progress-circular
			indeterminate
			:color="color"
		></v-progress-circular>
	</div>
</template>

<script>
export default {
	name: "AppLoader",
	props: {
		color: {
			type: String,
			default: "primary"
		},
		fullWidth: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.full-width {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--bg-4);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
