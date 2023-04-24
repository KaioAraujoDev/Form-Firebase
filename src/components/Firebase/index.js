
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, 
         collection, 
         addDoc,
         getDocs
        } from 'firebase/firestore';
import { getStorage,ref ,uploadBytes, getDownloadURL} from "firebase/storage";



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


const Firebase = async ({nome,profissao,idade,sexo,id}) =>{
    
    try {
        const docRef = await addDoc(collection(db, "pessoas"), {
          nome: nome,
          profissao: profissao,
          idade: idade,
          sexo:sexo,
          id:id
        });


        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }  

}

const inviteImage = async (image,id)=>{

    const namePhoto = id + ".jpg";
    const namePath = "image/"+namePhoto;

    const storageRef = ref(storage,namePath);

    async function uploadImage(){
        return await uploadBytes(storageRef , image);
    }
    
    return await uploadImage();
    
}

const getImage = async (id)=>{
    const namePhoto = id + ".jpg";
    const namePath = "image/"+namePhoto;


    async function getUrl(){
        try{
            const url = await getDownloadURL(ref(storage,namePath));
            return url;
        } catch(error){
            // console.log("error: "+error);
        }
    }
    return await getUrl();
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


export { GetData , inviteImage, getImage};
export default Firebase;



