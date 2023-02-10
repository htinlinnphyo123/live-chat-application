import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {db,auth} from '../firebase/config'
import { ref } from 'vue'

let error = ref('')

let createReq = async(displayName,email,password)=>{
            
    try{
        let res = await createUserWithEmailAndPassword(auth,email,password)
    
        if(!res){
            throw new Error('error to create user account')
        }

        await updateProfile(auth.currentUser,{
            displayName : displayName
        })
        

        return res;
    }
    catch(err){
        error.value = err.message;
        console.log(error.value)
    }

}

let createUser = ()=>{
    return {error,createReq}
}



export default createUser;