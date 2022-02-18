import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales/ru.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
	locale: 'ru',
	fallbackLocale: 'ru',
	messages: { 'ru': messages }
})

const loadedLanguages = ['ru']

export const languagesAvailable = ['uz', 'ru', 'en']

function setI18nLanguage (lang) {
	i18n.locale = lang
	document.querySelector('html').setAttribute('lang', lang)
	return lang
}

export function navigatorCloseLanguage () {
	const userLanguage = navigator.language
	if (languagesAvailable.includes(userLanguage)) {
		return loadLanguageAsync(userLanguage)
	} else if (userLanguage.includes('-')) {
		const userLanguageSplit = userLanguage.split('-')
		if (languagesAvailable.includes(userLanguageSplit[0])) {
			return loadLanguageAsync(userLanguageSplit[0])
		}
	}
	return 'ru'
}

export function loadLanguageAsync (lang) {
	if (i18n.locale !== lang) {
		if (!loadedLanguages.includes(lang)) {
			return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`).then(message => {
				i18n.setLocaleMessage(lang, message.default)
				loadedLanguages.push(lang)
				return setI18nLanguage(lang)
			})
		}
		return Promise.resolve(setI18nLanguage(lang))
	}
	return Promise.resolve(lang)
}
