import { createI18n } from "vue-i18n";
import English from './locales/English.json';
import French from './locales/French.json';

function loadLocalMessages(){
    const locales = [{English: English}, {French: French}]
    const messages = {}
    locales.forEach(lang =>{
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}
export default createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages: loadLocalMessages()
})
