<template>
	<v-app-bar
		app
		elevation="0"
		class="app-toolbar"
	>
		<v-app-bar-nav-icon @click.stop="$emit('emit:up')">
			<template v-slot:default>
<!--				<menu-icon />-->
				<v-icon>mdi-menu</v-icon>
			</template>
		</v-app-bar-nav-icon>

		<v-toolbar-title class="ml-0 pl-2 mr-5">
			<div v-if="$vuetify.breakpoint.smAndUp">
				<span class="font-600 small-2 text-2 d-block">
					Привет Muhammad
					<span class="d-block small-3">С возвращением</span>
				</span>
			</div>
		</v-toolbar-title>

		<!-- Shows on event calendar view -->
		<template v-if="$route.name === 'MainEventCalendar' || $route.name === 'MainEventCalendarDate'">
			<calendar-actions />
		</template>
		<!-- End Shows on event calendar view -->

		<v-spacer></v-spacer>

		<v-switch
			@change="changeMode"
			v-model="$vuetify.theme.dark"
			inset
			class="pt-6"
		></v-switch>

		<header-user-dropdown />
	</v-app-bar>
</template>

<script>
import CalendarActions from "@/modules/EventCalendar/components/CalendarActions";
import HeaderUserDropdown from "./components/HeaderUserDropdown";

export default {
	name: "index",
	components: {
		CalendarActions,
		HeaderUserDropdown
	},
	methods: {
		/*
		*
		* */
		changeMode(val) {
			const body = document.body

			val ? body.setAttribute("v-theme", "dark") : body.removeAttribute("v-theme")
		}
	}
}
</script>

<style>
.app-toolbar {
	border-bottom: 1px solid var(--border-color) !important;
}
</style>
