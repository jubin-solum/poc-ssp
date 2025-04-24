
// Plugins
import { registerPlugins } from '@/plugins'

// Pinia setup
import { createPinia } from 'pinia'

// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia()) 

app.mount('#app')
