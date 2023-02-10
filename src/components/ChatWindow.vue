<template>
      <div class="chat-window">
        <div class="messages" ref="msgToTop">
            <div class="single"  v-for="message in formatMessages" :key="message.id">
              <div :class="{'userself':message.isUser}">
                <span class="created-at">{{ message.created_at }} ago</span>
                <span class="name">{{ message.user }}</span>
                <span class="message">{{ message.message }}</span>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { collection,onSnapshot,query,orderBy } from '@firebase/firestore';
import { ref, computed,onUpdated } from 'vue';
import { formatDistanceToNow } from 'date-fns'
import getUser from '@/composables/getUser';

export default {

    setup(){

        let messages = ref([]);
        let {user} = getUser();
        let formatMessages = computed(()=>{
          return messages.value.map((msg)=>{
            let formatDate = formatDistanceToNow(msg.created_at.toDate())
            return {...msg,created_at:formatDate}
          })
        })

        let msgToTop = ref(null);

        onUpdated(()=>{
          msgToTop.value.scrollTop = msgToTop.value.scrollHeight;
        })

        let queryData = query(collection(db,"message"),orderBy("created_at","asc"));

        onSnapshot(queryData,(shots)=>{
            let result = [];
            let isUser = false;
            shots.docs.forEach((shot)=>{
              if(shot.data().created_at){

                if(shot.data().senderId===user.value.uid){
                  isUser = true;
                }else{
                  isUser = false;
                }

                let document = {id:shot.id,...shot.data(),isUser:isUser};
                result.push(document);                
                console.log(result);
              }
              messages.value = result;

            })
          
        })

        return {messages,formatMessages,msgToTop}

    }

}
</script>

<style>
     .chat-window {
        background: #f4f4f4;
        padding: 30px 20px;
      }
      .single {
        margin: 20px 0;
      }
      .userself{
       text-align:right;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        display:block;
        font-weight: bold;
        margin-right: 6px;
      }
      .message{
        display:inline-block;
        max-width:150px;
        padding:5px;
        border-radius:10px;
        background-color:#fff;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
        
      }
</style>