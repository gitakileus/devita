import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJSON from './translations/en'
import koJSON from './translations/ko'

const resources = {
	en: { translation: enJSON },
	ko: { translation: koJSON },
}

i18n.use(initReactI18next).init({
	resources,
	keySeparator: false,
	lng: localStorage.getItem('language') || 'en',
	fallbackLng: 'en',
	react: { useSuspense: true },
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
