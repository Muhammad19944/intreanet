import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCalendar from "@/router/modules/EventCalendar"
import DocumentFlow from "@/router/modules/DocumentFlow"
import UserProfile from "@/router/modules/UserProfile"
import ChatMessenger from "@/router/modules/ChatMessenger";
import ExchangeEmail from "@/router/modules/ExchangeEmail"

Vue.use(VueRouter)

const routes = [
	// Main Layout
	{
		path: "/",
		name: "MainLayout",
		component: () => import(/* webpackChunkName: "MainLayout" */ "@/layouts/MainLayout"),
		redirect: { name: "MainDashboard" },
		children: [
			{
				path: "/dashboard",
				name: "MainDashboard",
				component: () => import(/* webpackChunkName: "Home" */ "@/views/Home")
			},
			...EventCalendar,
			...DocumentFlow,
			...UserProfile,
			...ChatMessenger,
			...ExchangeEmail
		]
	},
	// End main Layout

	// Auth Layout
	{
		path: '/auth',
		name: 'AuthLayout',
		component: () => import(/* webpackChunkName: "AuthLayout" */ "@/layouts/AuthLayout"),
		redirect: { name: 'AuthLogin' },
		children: [
			{
				path: 'login',
				name: 'AuthLogin',
				component: () => import(/* webpackChunkName: "Auth" */ '@/views/Auth')
			}
		]
	}
	// End Auth Layout
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
