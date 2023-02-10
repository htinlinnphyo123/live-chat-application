<template>
  
<div v-if="user">
  <nav>
      <div>
          <p>Hi {{ user.displayName }}</p>
          <p class="email">logged in as email - {{ user.email }}</p>
      </div>
      <button @click="logout">Logout</button>
  </nav>
</div>

</template>

<script>

import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {

    setup(){

        let {error,logoutreq} = useLogout();
        let {user} = getUser();

        let logout = ()=>{
            let res = logoutreq();
            
            if(res){
                console.log('user logged out')
            }
            
            // console.log(user.value)
        }


      


        
        return {logout,user}
    }

}
</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>