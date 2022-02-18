export default {
	data() {
		return {
			fileList: []
		}
	},
	methods: {
		$uploadFiles(files) {
			let formData = new FormData()

			for (let i = 0; i < files.length; i++) {
				formData.append("file", files[i])

				this.$axios
					.post('/upload/', formData)
					.then(({ data }) => {
						this.fileList.push({
							id: data.id
						})
					})
			}
		}
	}
}
