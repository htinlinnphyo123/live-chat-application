<template>

  <div class="container">
    <div v-if="showRegisterPage">
      <Register @enterChatRoom='enterChatRoom'></Register>
      <p class="changeform">Already have an account?<span @click="showRegisterPage=!showRegisterPage">login here.</span></p>
    </div>
    <div v-if="!showRegisterPage">
      <Login @enterChatRoom='enterChatRoom'></Login>
      <p class="changeform">Do not have an account?<span @click="showRegisterPage=!showRegisterPage">Signup here.</span></p>
    </div>
  </div>

</template>

<script>
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { Register, Login },
    setup(){
      let showRegisterPage = ref(true);
      let router = useRouter();

      let enterChatRoom = ()=>{
        router.push({name:'chatRoom'});
      }

      return {showRegisterPage,enterChatRoom}
    }

}
</script>

<style>

</style>