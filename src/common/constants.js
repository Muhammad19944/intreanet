

export const DOCUMENT_TEXT_LIST = [
	{
		id: 1,
		text: "Входящие",
		icon: "$vuetify.icons.fileImport",
		colors: {
			primary: "var(--primary-1)",
			secondary: "var(--secondary-1)",
			transparent: "var(--transparent-1)"
		}
	},
	{
		id: 2,
		text: "Внутренние",
		icon: "$vuetify.icons.fileInvoice",
		colors: {
			primary: "var(--primary-2)",
			secondary: "var(--secondary-2)",
			transparent: "var(--transparent-2)"
		}
	},
	{
		id: 3,
		text: "Исходящие",
		icon: "$vuetify.icons.fileExport",
		colors: {
			primary: "var(--primary-3)",
			secondary: "var(--secondary-3)",
			transparent: "var(--transparent-3)"
		}
	},
	{
		id: 4,
		text: "Обращения",
		icon: null,
		colors: {
			primary: "var(--primary-4)",
			secondary: "var(--secondary-4)",
			transparent: "var(--transparent-4)"
		}
	},
	{
		id: 5,
		text: "Приказы и распоряжения. Протоколы",
		icon: null,
		colors: {

		}
	},
	{
		id: 6,
		text: "Контрольные документы",
		icon: null,
		colors: {

		}
	},
	{
		id: 7,
		text: "Пришедшие на регистрацию",
		icon: null,
		colors: {

		}
	},
	{
		id: 8,
		text: "Органайзер",
		icon: null,
		colors: {

		}
	},
	{
		id: 9,
		text: "Из вышестоящего органа",
		icon: null,
		colors: {

		}
	},
	{
		id: 10,
		text: "Согласование",
		icon: null,
		colors: {

		}
	}
]

export const TABLE_HEAD_TEXT_LIST = [
	{
		id: 1,
		title: "#",
		width: "75px"
	},
	{
		id: 2,
		title: "Рег. номер",
		width: "150px",
		value: "registrationNumber"
	},
	{
		id: 3,
		title: "Рег. дата",
		width: "150px",
		value: "registrationDate"
	},
	{
		id: 4,
		title: "Корреспондент",
		width: "200px",
		value: "Correspondent"
	},
	{
		id: 5,
		title: "Исх. номер",
		width: "150px",
		value: "originalNumber"
	},
	{
		id: 6,
		title: "Исх. дата",
		width: "150px",
		value: "originalDate"
	},
	{
		id: 7,
		title: "Содержание",
		width: "300px",
		value: "content"
	},
	{
		id: 8,
		title: "Файлы",
		width: "150px",
		value: "files"
	},
	{
		id: 9,
		title: "На рассмотрение",
		width: "250px",
		value: "forConsideration"
	},
	{
		id: 10,
		title: "Резолюция",
		width: "150px",
		value: "resolution"
	},
	{
		id: 11,
		title: "Ответственный исполнитель",
		width: "350px",
		value: "responsibleExecutor"
	},
	{
		id: 12,
		title: "Исполнители",
		width: "150px",
		value: "performers"
	},
	{
		id: 13,
		title: "Причина возврата",
		width: "150px",
		value: "reasonForReturn"
	},
	{
		id: 14,
		title: "Срок исполнителя",
		width: "150px",
		value: "executorTerm"
	},
	{
		id: 15,
		title: "Тип",
		width: "150px",
		value: "type"
	},
	{
		id: 16,
		title: "Кому",
		width: "150px",
		value: "whom"
	},
	{
		id: 17,
		title: "Дата рассылки",
		width: "150px",
		value: "dispatchDate"
	},
	{
		id: 18,
		title: "Срок ответа",
		width: "150px",
		value: "responseTime"
	},
	{
		id: 19,
		title: "Действие",
		width: "75px",
		value: "actions"
	}
]

export const REFERENCE_DOC_TYPE = "doc_type"

export const REFERENCE_CORRESPONDENT = "correspondent"
