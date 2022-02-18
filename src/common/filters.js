import Vue from "vue"
import { format, isValid } from "date-fns";

Vue.filter("filterHHmm", (val) => {
	return isValid(new Date(val)) ? format(new Date(val), "HH:mm") : "Не верный формат даты"
})
