import './assets/main.css'

import { useVuelidate } from '@vuelidate/core'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(useVuelidate)

app.mount('#app')
