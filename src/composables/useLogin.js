import {auth} from '../firebase/config'
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'

let error = ref('')
let loginAccount = async(email,password)=>{

    try{
        let res = await signInWithEmailAndPassword(auth,email,password)

        if(!res){
            throw new Error('enable to login to your account')
        }
    
        return res;
    }
    catch(err){
        error.value = err.message;
        console.log(error.value);
    }

}

let useLogin = ()=>{

    return {error,loginAccount}

}

export default useLogin