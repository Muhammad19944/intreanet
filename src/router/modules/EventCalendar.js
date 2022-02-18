
const eventCalendar = [
	{
		path: "event-calendar",
		name: "MainEventCalendar",
		component: () => import(/* webpackChunkName: "EventCalendar" */ "@/modules/EventCalendar")
	}
]

export default eventCalendar
