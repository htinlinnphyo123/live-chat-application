<template>
  
    <div class="">
        <h2>Register Your Account</h2>

        <form @submit.prevent="signUp">
            <div class="form-group">
                <label>UserName</label>
                <input type="text" class="form-control" v-model="userName">
            </div>
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
                <button>Register Account</button>
            </div>
        </form>
    </div>

</template>

<script>
import { ref } from 'vue';
import createUser from '../composables/createUser'

export default {

    setup(props,context){

        let userName = ref('');
        let email = ref('');
        let password = ref('');

        let {error,createReq} = createUser();

        let signUp = async()=>{

            let res =  await createReq(userName.value,email.value,password.value);
            if(res){
                context.emit('enterChatRoom')
            }else{
                console.log(error);
            }

        }



        return {userName,email,password,signUp,error}
    }


}
</script>

<style>

</style>