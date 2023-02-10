import {auth} from '../firebase/config'
import { ref } from 'vue';
import { signOut } from 'firebase/auth';

let error = ref('')

let logoutreq = async()=>{

    try{
        await signOut(auth)
    }
    catch(err){
        error.value = err.message;
        console.log(error.value)
    }


}


let useLogout = ()=>{

    return {error,logoutreq}

}

export default useLogout;



