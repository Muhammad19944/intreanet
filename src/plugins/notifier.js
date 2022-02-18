import notificationTypes from "@/common/enums/notificationTypes";

export default class Notifier {
	#store;
	constructor(store) {
		this.#store = store
	}

	info(text) {
		console.log(text, notificationTypes.INFO)
	}

	success(text) {
		console.log(text, notificationTypes.SUCCESS)
	}

	warning(text) {
		console.log(text, notificationTypes.WARNING)
	}

	error(text) {
		console.log(text, notificationTypes.ERROR)
	}
}
