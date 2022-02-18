
const DocumentFlow = [
	{
		path: "document-flow",
		name: "MainDocumentFlow",
		component: () => import(/* webpackChunkName: "DocumentFlow" */ "@/modules/DocumentFlow/views"),
		children: [
			{
				path: "home",
				name: "DocumentFlowHome",
				component: () => import(/* webpackChunkName: "DocumentFlowHome" */ "@/modules/DocumentFlow/views/Home")
			},
			{
				path: "document-registration",
				name: "DocumentFlowRegistration",
				component: () => import(/* webpackChunkName: "DocumentFlowRegistration" */ "@/modules/DocumentFlow/views/Registration")
			},
			{
				path: "document-registration/create",
				name: "DocumentFlowRegistrationCreate",
				component: () => import(/* webpackChunkName: "DocumentFlowRegistrationCreate" */ "@/modules/DocumentFlow/components/DocumentRegistrationForm")
			}
		]
	}
]

export default DocumentFlow
