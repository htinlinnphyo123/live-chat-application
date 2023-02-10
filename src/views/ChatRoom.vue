<template>
  
    <div class="container">
        <div>
            <Navbar></Navbar>
            <ChatWindow></ChatWindow>
            <NewChatForm></NewChatForm>
        </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import { watch } from 'vue';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup(){

        let {user} = getUser();
        let route = useRouter()

        watch(user,()=>{
            if(!user.value){
                route.push('/')
            }

        })

    }

}
</script>

<style>

</style>