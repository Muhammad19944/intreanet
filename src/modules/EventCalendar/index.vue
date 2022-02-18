<template>
	<div class="event-calendar-view h-100">
		<template v-if="moduleLoaded">
			<div class="gap-medium d-flex h-100">
				<calendar-resources class="aside-width-300"></calendar-resources>

				<event-calendar class="flex-1" />
			</div>
		</template>
	</div>
</template>

<script>
import CalendarResources from "./components/CalendarResources";
import EventCalendar from "./components/EventCalendar";

import { mapState, mapMutations } from "vuex"

const eventCalendarStoreModule = () => import("@/modules/EventCalendar/store")

export default {
	name: "index",
	components: {
		CalendarResources,
		EventCalendar
	},
	computed: {
		...mapState({
			moduleLoaded: "isDynamicModuleLoaded"
		})
	},
	mounted() {
		eventCalendarStoreModule().then(eventCalendarModule => {
			this.$store.registerModule('calendarModule', eventCalendarModule.default)

			this.LOADED_DYNAMIC_MODULE(true)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule('calendarModule')
		this.LOADED_DYNAMIC_MODULE(false)
	},
	methods: {
		...mapMutations({
			LOADED_DYNAMIC_MODULE: "LOADED_DYNAMIC_MODULE"
		})
	}
}
</script>

<style>
</style>
