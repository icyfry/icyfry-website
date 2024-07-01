import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import {resumeContent} from './resume'
import App from '@/App.vue'
import './registerServiceWorker'
import router from './router'

const i18n = createI18n({
    legacy: false,
    locale: 'en', // Langue par défaut
    messages: resumeContent,
  })

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
