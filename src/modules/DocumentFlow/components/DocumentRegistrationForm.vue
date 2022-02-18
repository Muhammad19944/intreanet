<template>
	<app-wrapper class="flex-1">
		<template #body>
			<div class="d-flex flex-column align-start h-100 pa-4">
				<div class="d-flex align-center w-100 mb-12">
					<span class="heading-9 font-600 text-2 mr-3 d-block">Регистрация документа</span>
					<v-divider />
				</div>

				<div class="w-100 mb-auto">
					<v-row>
						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Рег. номер</span>

								<v-text-field
									v-model="registrationFormModel.register_number"
									hide-details
									outlined
								></v-text-field>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Исх. номер</span>

								<v-text-field
									v-model="$v.registrationFormModel.outgoing_number.$model"
									:error="$v.registrationFormModel.outgoing_number.$error"
									hide-details
									outlined
								></v-text-field>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Рег. дата</span>

								<app-date-picker
									v-model="$v.registrationFormModel.register_date.$model"
									:error="$v.registrationFormModel.register_date.$error"
									with-input
								/>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Исх. дата</span>

								<app-date-picker
									v-model="$v.registrationFormModel.outgoing_date.$model"
									:error="$v.registrationFormModel.outgoing_date.$error"
									with-input
								/>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Корреспондент</span>

								<v-autocomplete
									v-model="$v.registrationFormModel.correspondent.$model"
									:error="$v.registrationFormModel.correspondent.$error"
									:items="filterReferenceList(REFERENCE_CORRESPONDENT)"
									item-text="name"
									item-value="id"
									outlined
									hide-details
								>
									<template #append>
										<v-icon>mdi-chevron-down</v-icon>
									</template>
								</v-autocomplete>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Вид документа</span>

								<v-autocomplete
									v-model="$v.registrationFormModel.doc_type.$model"
									:error="$v.registrationFormModel.doc_type.$error"
									:items="filterReferenceList(REFERENCE_DOC_TYPE)"
									item-text="name"
									item-value="id"
									outlined
									hide-details
								>
									<template #append>
										<v-icon>mdi-chevron-down</v-icon>
									</template>
								</v-autocomplete>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Журнал</span>

								<v-autocomplete
									v-model="$v.registrationFormModel.journal.$model"
									:error="$v.registrationFormModel.journal.$error"
									:items="getJournalList"
									item-text="name"
									item-value="id"
									outlined
									hide-details
								>
									<template #append>
										<v-icon>mdi-chevron-down</v-icon>
									</template>
								</v-autocomplete>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Прикрепить файл</span>

								<v-file-input
									@change="$uploadFiles"
									multiple
									accept="image/*"
									prepend-inner-icon="mdi-paperclip"
									prepend-icon=""
									outlined
									hide-details
								></v-file-input>
							</div>
						</v-col>

						<v-col md="12">
							<div class="app-input">
								<span class="d-block font-600 small-2 mb-2">Содержание</span>

								<v-textarea
									v-model="$v.registrationFormModel.description.$model"
									:error="$v.registrationFormModel.description.$error"
									outlined
									hide-details
									no-resize
									auto-grow
								></v-textarea>
							</div>
						</v-col>
					</v-row>

					<template v-if="registrationFormModel.is_created">
						<v-row>
							<v-col md="3">
								<div class="app-input">
									<span class="d-block font-600 small-2 mb-2">Список рассылки</span>

									<v-autocomplete
										v-model="model"
										:items="items"
										:loading="isLoading"
										:search-input.sync="search"
										item-text="full_name"
										item-value="id"
										hide-details
										outlined
									>
										<template #append>
											<v-icon>mdi-chevron-down</v-icon>
										</template>
									</v-autocomplete>
								</div>
							</v-col>
						</v-row>

						<v-row>
							<v-col md="12">
								<app-table
									:table-head-items="tableListSelect"
									table-width="1200"
								>
									<template #tableBody>
										<tr v-for="i in 3" :key="i">
											<td>{{ i }}</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>
												<app-button
													min-width="43"
													width="43px"
													color="var(--primary-4)"
													icon
												>
													<template #prepend>
														<v-icon>mdi-delete-outline</v-icon>
													</template>
												</app-button>
											</td>
										</tr>
									</template>
								</app-table>
							</v-col>
						</v-row>
					</template>
				</div>

				<app-button @click="send" depressed class="mt-10">
					<template #default>
						Создать документ
					</template>
					<template #append>
						<v-icon size="20">mdi-send</v-icon>
					</template>
				</app-button>
			</div>
		</template>
	</app-wrapper>
</template>

<script>
import { mapGetters } from "vuex"
import { required } from 'vuelidate/lib/validators';
import { fileUpload, debounce } from "@/common/mixins"
import { REFERENCE_DOC_TYPE, REFERENCE_CORRESPONDENT, TABLE_HEAD_TEXT_LIST } from "@/common/constants"
import { selectFromList } from "@/common/helpers";

export default {
	name: "DocumentRegistrationForm",
	mixins: [fileUpload, debounce],
	data() {
		return {
			items: [],
			model: null,
			search: null,
			isLoading: false,
			registrationFormModel: {
				register_date: "",
				register_number: "",
				outgoing_date: "",
				outgoing_number: "",
				correspondent: null,
				doc_type: null,
				description: "",
				journal: null,
				filial: null,
				documents: [],
				is_created: true
			},
			REFERENCE_DOC_TYPE,
			REFERENCE_CORRESPONDENT
		}
	},
	validations: {
		registrationFormModel: {
			register_date: { required },
			outgoing_date: { required },
			outgoing_number: { required },
			correspondent: { required },
			doc_type: { required },
			description: { required },
			journal: { required },
		}
	},
	computed: {
		...mapGetters({
			filterReferenceList: "documentFlowModule/filterReferenceList",
			getJournalList: "documentFlowModule/getJournalList",
			getCurrentUser: "auth/getCurrentUser"
		}),
		/*
		*
		* */
		tableListSelect() {
			return selectFromList([1, 15, 16, 17, 18, 19], TABLE_HEAD_TEXT_LIST)
		}
	},
	watch: {
		search(val) {
			this.isLoading = true

			this.$axios.get("/user/for_chat/", {
				params: {
					search: val
				}
			})
			.then(({ data }) => {
				console.log(data);
			})
		},
	},
	methods: {
		send() {
			let data = {
				...this.registrationFormModel,
				documents: this.fileList,
				filial: this.getCurrentUser.filial_id,
				register_date: `${this.registrationFormModel.register_date} ${new Date().getHours()}:${new Date().getMinutes()}`,
				outgoing_date: `${this.registrationFormModel.outgoing_date} ${new Date().getHours()}:${new Date().getMinutes()}`
			}

			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.$store.dispatch("documentFlowModule/fetchRegisterIncomingDocument", data)
			.then((response) => {
				this.registrationFormModel = {
					...response,
					register_date: new Date(response.register_date).toISOString().replace(/T.*$/, ''),
					outgoing_date: new Date(response.outgoing_date).toISOString().replace(/T.*$/, '')
				}
			})
		}
	}
}
</script>

<style scoped>

</style>
