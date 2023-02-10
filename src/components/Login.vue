<template>
  
  <div class="">
      <h2>Login to your account</h2>

      <form @submit.prevent="login">
          <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password">
          </div>
          <div v-if="error" class="error">
                {{ error }}
          </div>
          <div class="d-grid">
              <button>Login to your account</button>
          </div>
      </form>
  </div>

</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {

    setup(props,context){

        let email = ref('');
        let password = ref('');
        
        let {error,loginAccount} = useLogin();

        let login = async()=>{

            let res = await loginAccount(email.value,password.value);
            if(res){
                context.emit('enterChatRoom');
            }

        }


        return {email,password,login,error}
    }

}
</script>

<style>

</style>