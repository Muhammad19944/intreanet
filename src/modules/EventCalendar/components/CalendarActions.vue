<template>
	<div class="calendar-actions-view d-flex align-center">
		<app-tooltip bottom>
			<template #content>
				<app-button
					@click="setToday"
					min-width="100"
					height="45"
					depressed
					class="mr-2"
				>
					<template #prepend>
						<v-icon size="20">mdi-calendar-month-outline</v-icon>
					</template>
					<template>
						Сегодня
					</template>
				</app-button>
			</template>

			<template #text>
				12345
			</template>
		</app-tooltip>

		<app-tooltip bottom>
			<template #content>
				<app-button @click="prevMonth" min-width="50" icon>
					<template #prepend>
						<v-icon>mdi-chevron-left</v-icon>
					</template>
				</app-button>
			</template>

			<template #text>
				Предыдущий месяц
			</template>
		</app-tooltip>

		<app-tooltip bottom>
			<template #content>
				<app-button @click="nextMonth" min-width="50" icon>
					<template #prepend>
						<v-icon>mdi-chevron-right</v-icon>
					</template>
				</app-button>
			</template>

			<template #text>
				Следующий месяц
			</template>
		</app-tooltip>

		<span class="body--1 ml-2">{{ getChangedDate }}</span>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "CalendarActions",
	computed: {
		...mapGetters({
			getCalendar: "getCalendar",
			getChangedDate: "getChangedDate"
		})
	},
	methods: {
		...mapMutations({
			SET_TODAY: "SET_TODAY"
		}),
		/*
		*
		* */
		setToday() {
			this.SET_TODAY()
		},
		/*
		*
		* */
		prevMonth() {
			this.getCalendar.ref.prev()
		},
		/*
		*
		* */
		nextMonth() {
			this.getCalendar.ref.next()
		}
	}
}
</script>

<style scoped>

</style>
