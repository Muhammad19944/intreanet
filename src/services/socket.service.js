let socket = null

export default class Socket {
	#store;
	constructor(store) {
		this.#store = store
		this.a = null
	}

	init(url, token) {
		socket = new WebSocket(`${url}?token=${token}`)

		this.randomNumber()

		return this
	}

	randomNumber() {
		return this.a = Math.random()
	}

	onOpen(json) {
		socket.addEventListener("open", () => {
			socket.send(JSON.stringify(json))
		})
	}

	onMessageSend(json) {
		socket.send(JSON.stringify(json))
	}

	onMessageReceive() {
		socket.addEventListener("message", (event) => {
			const data = JSON.parse(event.data)

			// console.log(data);

			switch (data.type) {
				case "new_message":
					this.#store.dispatch("chatModule/mergeConversationUserMessages", data)
					break;
				default:
					1
			}
		})
	}

	onCloseChannel() {
		socket.close()
		console.log('Socket closed')
		// socket.addEventListener('close', (event) => {
		// 	console.log('The connection has been closed successfully.');
		// });
	}
}
