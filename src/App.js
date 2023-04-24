
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import ListaResultado from "./components/ListaResultado";
import { GetData } from "./components/Firebase";

import './global.css';
import './reset.css';



function App() {

  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([]);

  

  const fetchData = () => {
    
    setLoading(true)

    const fetch = GetData();

    fetch.then((res)=>{
        setData(res)
        setLoading(false)
    }).catch(e =>{
        console.log(e);
    }) 
     
  }

  useEffect(()=>{
    fetchData()
  },[])

  const handleLoading = (loading) =>{
     setLoading(loading);

  }
  
  return (
    <>
      <Banner/>
      <Formulario loadingAgain={handleLoading} fetchData={()=>{ fetchData() }} />
      <ListaResultado loading={loading} handleLoading={ loading => handleLoading(loading)} fetchData={()=>{ fetchData() }} data={data}/>
    </>
  );
}

export default App;
