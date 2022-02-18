
const UserProfile = [
	{
		path: "profile",
		name: "MainUserProfile",
		component: () => import(/* webpackChunkName: "MainUserProfile" */ "@/modules/UserProfile/views/UserProfile")
	}
]

export default UserProfile
