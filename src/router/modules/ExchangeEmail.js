
const exchangeEmail = [
	{
		path: "exchange-email",
		name: "MainExchangeEmail",
		component: () => import(/* webpackChunkName: "MainExchangeEmail" */ "@/modules/ExchangeEmail/views"),
		redirect: { name: "ExchangeEmailInbox" },
		children: [
			{
				path: "inbox",
				name: "ExchangeEmailInbox",
				component: () => import(/* webpackChunkName: "ExchangeEmailInbox" */ "@/modules/ExchangeEmail/views/Inbox")
			},
			{
				path: "send",
				name: "ExchangeEmailSend",
				component: () => import(/* webpackChunkName: "ExchangeEmailSend" */ "@/modules/ExchangeEmail/views/Send")
			},
			{
				path: "trash",
				name: "ExchangeEmailTrash",
				component: () => import(/* webpackChunkName: "ExchangeEmailTrash" */ "@/modules/ExchangeEmail/views/Trash")
			}
		]
	}
]

export default exchangeEmail
