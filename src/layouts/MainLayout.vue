<template>
	<div class="app-main-layout">
		<the-sidebar ref="appSidebar" />

		<the-header @emit:up="toggleDrawer" />

		<v-main class="app-main">
			<router-view class="app-router-view d-flex flex-column pa-5"/>
		</v-main>
	</div>
</template>

<script>
import TheSidebar from '@/layouts/Sidebar'
import TheHeader from '@/layouts/Header'
import { mapGetters, mapActions } from "vuex"

export default {
	name: "MainLayout",
	components: {
		TheSidebar,
		TheHeader
	},
	computed: {
		...mapGetters({
			userHandShakeSocket: "socket/getUserHandShakeSocket"
		})
	},
	mounted() {
		this.initUserSocket()
	},
	methods: {
		...mapActions({
			initUserHandShakeSocket: "socket/initUserHandShakeSocket"
		}),
		toggleDrawer() {
			const {appSidebar} = this.$refs

			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer;
				case 'sm':
					return appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer;
				case 'md':
					return appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer;
				case 'lg':
					return appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini;
				case 'xl':
					return appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini;
			}
		},
		/*
		*
		* */
		initUserSocket() {
			if(this.$jwt.getToken()) {
				this.initUserHandShakeSocket(this.$socket.init(process.env.VUE_APP_SOCKET_URL, this.$jwt.getToken()))
				this.userHandShakeSocket.onOpen({
					command: "user_handshake"
				})

				this.userHandShakeSocket.onMessageReceive()

				// setTimeout(() => {
				// 	this.$axios.get("/chats/private/socket_message/")
				// 		.then(({ data }) => {
				// 			console.log(data);
				// 		})
				// }, 2000)
			}
		}
	}
}
</script>

<style>
.app-main-layout {
	/*background: #fafbfc;*/
	min-height: 100vh;
}

.app-main {
	height: 100%;
	background: var(--bg-3);
}

.app-main .v-main__wrap {
	display: flex;
	flex-direction: column;
	height: calc(var(--vh, 1vh) * 100 - 64px);
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
