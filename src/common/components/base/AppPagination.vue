<template>
	<div class="app-pagination">
		<v-pagination
			v-model="page"
			:length="15"
			:total-visible="7"
		></v-pagination>
	</div>
</template>

<script>
export default {
	name: "AppPagination",
	data() {
		return {
			page: 1
		}
	}
}
</script>

<style>
.v-pagination__item,
.v-pagination__navigation {
	background: var(--bg-4) !important;
	box-shadow: none !important;
	border: 1px solid var(--bg-2);
	font-family: var(--font-medium);
	color: var(--text-2) !important;
}

.v-pagination__item--active {
	color: #fff !important;
}
</style>
