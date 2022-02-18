
const ChatMessenger = [
	{
		path: "chat",
		name: "MainChat",
		component: () => import(/* webpackChunkName: "MainChat" */ "@/modules/ChatMessenger/views"),
		// children: [
		// 	{
		// 		path: ":id",
		// 		name: "MainChatID",
		// 		component: () => import(/* webpackChunkName: "ChatAreaWrapper" */ "@/modules/ChatMessenger/components/ChatAreaWrapper")
		// 	}
		// ]
	},
]

export default ChatMessenger
