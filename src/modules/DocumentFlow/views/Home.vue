<template>
	<div class="document-flow-home-view d-flex gap-medium">
		<div class="flex-1">
			<v-row>
				<v-col md="6">
					<app-wrapper>
						<template #header>
							<div class="d-flex">
								<div>
									<span class="font-500 d-flex align-center success-text small-2 mb-1">
										<v-icon class="mr-2" color="var(--primary-2)" size="24">mdi-clipboard-account-outline</v-icon>
										Назначено мне
									</span>
									<span class="font-500 d-block text-2 small-2">Процент исполнения:</span>
								</div>
								<div class="align-self-end ml-2 mb-n1">
									<h5 class="text-h5 text-2">71<span class="heading-9">%</span></h5>
								</div>
							</div>
						</template>
						<template #body>
							<app-column-chart />
						</template>
					</app-wrapper>
				</v-col>

				<v-col md="6">
					<app-wrapper>
						<template #header>
							<div class="d-flex">
								<div>
									<span class="font-500 d-flex align-center error-text small-2 mb-1">
										<v-icon class="mr-2" color="var(--primary-4)" size="24">
											mdi-clipboard-check-outline
										</v-icon>
										Назначено мной
									</span>
									<span class="font-500 d-block text-2 small-2">Процент исполнения:</span>
								</div>
								<div class="align-self-end ml-2 mb-n1">
									<h5 class="text-h5 text-2">93<span class="heading-9">%</span></h5>
								</div>
							</div>
						</template>
						<template #body>
							<app-column-chart />
						</template>
					</app-wrapper>
				</v-col>
			</v-row>

			<app-wrapper class="mt-7">
				<template #header>
					<div class="d-flex align-center">
						<div>
							<span class="font-500 d-flex align-center warning-text small-2 mb-1">
								<v-icon class="mr-2" color="var(--primary-3)" size="24">mdi-bell-outline</v-icon>
								Уведомления
							</span>
							<span class="font-500 d-block text-2 small-2">Настройте уведомления каждый день, когда вам нужно</span>
						</div>
						<v-spacer />
						<div>
							<app-date-picker with-input />
						</div>
					</div>
				</template>
				<template #body>
					<v-calendar
						ref="calendarRef"
						v-model="changedDateState"
						color="primary"
						:events="events"
						:event-color="getEventColor"
						:type="type"
						@click:event="showEvent"
						@click:more="viewDay"
						@click:date="viewDay"
						@change="updateRange"
					></v-calendar>
				</template>
			</app-wrapper>
		</div>

		<div class="aside-width-380">
			<app-wrapper>
				<template #header>
					<span class="font-500 d-block text-2">Дни рождения</span>
				</template>
				<template #body>
					<template v-for="i in 4">
						<app-user-card :key="i" class="mb-4" />
					</template>
				</template>
			</app-wrapper>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "Home",
	data() {
		return {
			focus: '',
			type: 'month',
			typeToLabel: {
				month: 'Month',
				week: 'Week',
				day: 'Day',
				'4day': '4 Days',
			},
			selectedEvent: {},
			selectedElement: null,
			selectedOpen: false,
			events: [],
			colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
			names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
		}
	},
	computed: {
		/*
		*
		* */
		...mapGetters({
			calendarGetters: "getCalendar",
			getChangedDate: "getChangedDate"
		}),

		changedDateState: {
			get() {
				return this.getChangedDate
			},
			set(value) {
				console.log(value);
				return value
			}
		},
	},
	mounted () {
		const { calendarRef } = this.$refs

		this.SET_CALENDAR_REF(calendarRef)
		// this.$refs.calendar.checkChange()
	},
	methods: {
		...mapMutations({
			SET_CALENDAR_REF: "SET_CALENDAR_REF",
			UPDATE_CHANGED_DATE: "UPDATE_CHANGED_DATE"
		}),

		viewDay({ date }) {
			this.UPDATE_CHANGED_DATE(date)
		},
		getEventColor (event) {
			return event.color
		},
		prev () {
			this.$refs.calendarRef.prev()
		},
		next () {
			this.$refs.calendarRef.next()
		},
		showEvent ({ nativeEvent, event }) {
			const open = () => {
				this.selectedEvent = event
				this.selectedElement = nativeEvent.target
				requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
			}

			if (this.selectedOpen) {
				this.selectedOpen = false
				requestAnimationFrame(() => requestAnimationFrame(() => open()))
			} else {
				open()
			}

			nativeEvent.stopPropagation()
		},
		updateRange ({ start, end }) {
			const events = []

			const min = new Date(`${start.date}T00:00:00`)
			const max = new Date(`${end.date}T23:59:59`)
			const days = (max.getTime() - min.getTime()) / 86400000
			const eventCount = this.rnd(days, days + 20)

			for (let i = 0; i < eventCount; i++) {
				const allDay = this.rnd(0, 3) === 0
				const firstTimestamp = this.rnd(min.getTime(), max.getTime())
				const first = new Date(firstTimestamp - (firstTimestamp % 900000))
				const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
				const second = new Date(first.getTime() + secondTimestamp)

				events.push({
					name: this.names[this.rnd(0, this.names.length - 1)],
					start: first,
					end: second,
					color: this.colors[this.rnd(0, this.colors.length - 1)],
					timed: !allDay,
				})
			}

			this.events = events
		},
		rnd (a, b) {
			return Math.floor((b - a + 1) * Math.random()) + a
		},
	}
}
</script>

<style scoped>

</style>
