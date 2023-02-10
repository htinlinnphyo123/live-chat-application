import { db,timestamp } from "@/firebase/config"
import { collection,doc, setDoc } from "firebase/firestore"
import {ref} from 'vue';


let useCollection = (collector)=>{

    let error = ref('')
    let addDoc = async(data)=>{

        try{
            let getData = doc(collection(db,collector));

            await setDoc(getData,data)

            return getData;
        }
        catch(err){
            error.value = err.message;
            console.log(error.value)
        }

    }

    
    return {error,addDoc}

}



export default useCollection;





