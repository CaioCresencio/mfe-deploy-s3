import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

 
const RemoteButton = defineAsyncComponent(() => import('mfePost/Button'));
const remoteTodo = defineAsyncComponent(() => import('mfeTodo/Todo'));

const app = createApp(App)

app.component("RemoteButton", RemoteButton);
app.component("RemoteTodo", remoteTodo);

app.use(router)

app.mount('#app')
