<template>
	<div>
		<template v-if="!withInput">
			<v-date-picker
				v-model="picker"
				v-bind="$attrs"
				v-on="$listeners"
				color="primary"
				no-title
				scrollable
			></v-date-picker>
		</template>

		<template v-else>
			<v-menu
				v-model="menu"
				:close-on-content-click="false"
				:nudge-right="0"
				transition="scale-transition"
				offset-y
				min-width="auto"
			>
				<template v-slot:activator="{ on, attrs }">
<!--					v-bind="attrs"-->
					<v-text-field
						v-model="picker"
						outlined
						prepend-inner-icon="mdi-calendar"
						:label="label"
						readonly
						hide-details
						v-bind="$attrs"
						v-on="on"
					></v-text-field>
				</template>

				<v-date-picker
					@input="menu = false"
					v-model="picker"
					scrollable
					:range="range"
				></v-date-picker>
			</v-menu>
		</template>
	</div>
</template>

<script>
export default {
	name: "AppDatePicker",
	props: {
		value: {
			type: String,
			default: () => ""
		},
		withInput: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: ""
		},
		range: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
			menu: false,
		}
	},
	computed: {
		picker: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	}
}
</script>

<style>

</style>
