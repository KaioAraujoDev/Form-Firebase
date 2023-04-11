
import { useState } from "react";
import Input from "./Input";
import Firebase from "../Firebase";
import "./Formulario.css";

const Formulario = (props) =>{

    const [nome,setNome] = useState('');
    const [profissao,setProfissao] = useState('');
    const [idade,setIdade] = useState('');
    const [sexo,setSexo] = useState('');
    const [image,setImage] = useState('');
    const [viewImage, setViewImage] = useState(false);
    const [loadImage, setLoadImage] = useState(false);


    const inviteData = (event) =>{

        event.preventDefault();

        
        const data = ({
            nome,
            profissao,
            idade,
            sexo,
            image
        }) 

        

        Firebase(data);

        props.fetchData(); 
        
    }

   

    return(
        <div className="main-form">

            <form onSubmit={event => inviteData(event)}>
                <Input 
                    aoAlterar={event => setNome(event.target.value)} 
                    label="Nome"  
                    placeholder="Digite o seu nome" 
                    type="text" 
                    max="50"
                    min="3"
                    required={true}
                />
                <Input 
                    aoAlterar={event => setProfissao(event.target.value)} 
                    label="Profissão" placeholder="Digite sua profissão" 
                    type="text"
                    max="50"
                    min="3"
                    required={true}
                />
                <Input 
                    aoAlterar={event => setIdade(event.target.value)} 
                    label="Idade" 
                    placeholder="Digite sua idade" 
                    type="number"
                    max="3"
                    min="1"
                    required={true}
                />
                <Input 
                    aoAlterar={event => setImage(event.target.files[0])}
                    label="Imagem"
                    placeholder="Anexe sua Imagem"
                    type="file"
                    required={true}
                />

                {/* <Input
                    aoAlterar={(event)=>{
                        setImage(event.target.value)
                        
                        setViewImage(false);
                        setLoadImage(true);

                        setTimeout(()=>{
                            const searchImage = ()=>{
                                
    
    
                                const image = event.target.value;
                                const firstString = (image.indexOf("://")+ 3) ;
                                const formatString = image.substring(firstString,image.length);
    
                                fetch(`https://${formatString}`).then((res)=>{
                                    
                                    if(res.status === 200){
                                        setViewImage(true);
                                        setLoadImage(false);
                                    }else{
                                        setViewImage(false);
                                        setLoadImage(false);
                                    }
    
                                }).catch(e =>{
                                    console.log(e);
                                    setViewImage(false);
                                    setLoadImage(false);
                                })
                            }

                            searchImage();
                        },1500)
                        
                    }} 
                    label="Imagem" 
                    placeholder="Coloque aqui sua imagem" 
                    type="text"
                    required={false}
                /> */}
                {/* <div className="div-result-image">
                    { (viewImage === false && loadImage) ? 
                        <div className="div-loading">
                            <img src="./img/loading.svg" alt="loading-img"></img>
                        </div>
                        : (viewImage && loadImage === false) ? 
                            <div className="div-image-view">
                                <img src={image} alt="img-view"></img> 
                            </div> : <div className="div-alert-view"> <p>Digite um link de imagem válido para adicionar ao perfil </p></div>
                    }
                </div> */}
                
                <div className="div-input">
                    <label>Selecione seu sexo</label>
                    <Input 
                        aoAlterar={event => setSexo(event.target.value)} 
                        label="Masculino" 
                        type="radio" 
                        name="sexo" 
                        id="masculino" 
                        value="M"
                    />
                    <Input 
                        aoAlterar={event => setSexo(event.target.value)} 
                        label="Feminino" 
                        type="radio" 
                        name="sexo" 
                        id="feminino" 
                        value="F"
                    />
                </div>
                {/* <Input label="Foto"  type="image"/> */}
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;