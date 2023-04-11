
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, 
         collection, 
         addDoc,
         getDocs
        } from 'firebase/firestore';
import { getStorage,ref ,uploadBytes} from "firebase/storage";

import { v4 } from "uuid";

const namePhoto = v4() + ".jpg";
const namePath = "image/"+namePhoto;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZiB0AYiU3ccH_VShwM6S8Td31NhXL80U",
    authDomain: "finder-people.firebaseapp.com",
    projectId: "finder-people",
    storageBucket: "gs://finder-people.appspot.com",
    messagingSenderId: "872985529138",
    appId: "1:872985529138:web:da7d2aa5577070ba34252b",
    measurementId: "G-0PRF7G3NLL"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//storage
const storage = getStorage(app);
const storageRef = ref(storage,"image/image.jpg");




const Firebase = async ({nome,profissao,idade,sexo,image}) =>{
    
    try {
        const docRef = await addDoc(collection(db, "pessoas"), {
          nome: nome,
          profissao: profissao,
          idade: idade,
          sexo:sexo
        });

        uploadBytes(storageRef , image).then((snapshot)=>{
            console.log('uploaded a blob or file!');
        })

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    

}


const GetData = () =>{

    let res = [];

    async function fetchData(){
    
        let data = [];
        const peoples =  await getDocs(collection(db,"pessoas"));
        
        peoples.forEach(item => {
            data = [...data,item.data()];
            
        });

        res = data;
        
        return res;
         
    }

    return fetchData();

    
}


export { GetData };
export default Firebase;



