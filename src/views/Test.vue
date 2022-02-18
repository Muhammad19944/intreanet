<template>
	<div class="ma-10">
		<v-btn color="primary" depressed>
			Button {{ $t('message') }}
		</v-btn>

		<p>{{ $t("message") }} ({{ $i18n.locale }})</p>
		<button v-for="(lang, index) in listLang" :key="index" @click="changeLang(lang)">{{ lang }}</button>

		<router-link :to="{name: 'About'}">About</router-link>
	</div>
</template>

<script>
import TestStore from "@/modules/test/store"
import { loadLanguageAsync, languagesAvailable, navigatorCloseLanguage } from '@/plugins/i18n'

export default {
	name: 'Test',
	data() {
		return {
			listLang: languagesAvailable
		}
	},
	created: function () {
		navigatorCloseLanguage()
	},
	mounted() {
		this.$store.registerModule('testStore', TestStore)

		console.log(this.$store.state)
	},
	beforeDestroy () {
		this.$store.unregisterModule('testStore')
	},
	methods: {
		changeLang: function (lang) {
			loadLanguageAsync(lang)
		}
	}
}
</script>
