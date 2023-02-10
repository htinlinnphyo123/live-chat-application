import {auth} from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

let user = ref(auth.currentUser)
let getUser = ()=>{

    onAuthStateChanged(auth,(_user)=>{
        user.value = _user
    })

    return {user}

}

export default getUser