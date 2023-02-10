import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
let app;

onAuthStateChanged(auth,()=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})


