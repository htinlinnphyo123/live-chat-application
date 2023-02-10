<template>
    
    <div>
        <form>
            <textarea
             placeholder="Enter a message"
             v-model="message"
             @keydown.enter="handleSubmit"
             ></textarea>
        </form>
    </div>

</template>

<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import {timestamp} from '../firebase/config'
import useCollection from '@/composables/useCollection';

export default {

    setup(){

        let message = ref('');
        let {user} = getUser();
        let {error,addDoc} = useCollection('message');
        
        // console.log(user.value.uid)

        let handleSubmit = ()=>{
            
            let chat = {
                senderId : user.value.uid,
                user : user.value.displayName,
                message : message.value,
                created_at : timestamp
            }

            addDoc(chat)
            message.value=''
        }

        return {message,handleSubmit}
    }

}
</script>

<style>
      form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        font-size:16px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>