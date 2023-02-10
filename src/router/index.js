import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatRoom from '../views/ChatRoom.vue'
import {auth} from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home,
    beforeEnter(to,from,next){
      let user = auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:'chatRoom'})
      }

    }
  },
  {
    path : '/chat',
    name : 'chatRoom',
    component : ChatRoom,
    beforeEnter(to,from,next){
      let user = auth.currentUser;
      if(user){
        next();
      }else{
        next({name:'homeView'})
      }
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
