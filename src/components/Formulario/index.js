
import { useState } from "react";
import Input from "./Input";
import Firebase , { inviteImage } from "../Firebase";
import { v4 } from "uuid";

import "./Formulario.css";

const Formulario = (props) =>{

    const [nome,setNome] = useState('');
    const [profissao,setProfissao] = useState('');
    const [idade,setIdade] = useState('');
    const [sexo,setSexo] = useState('');
    const [image,setImage] = useState('');

    const inviteData = async (event) =>{

        event.preventDefault();

        const id = v4();

        const data = ({
            nome,
            profissao,
            idade,
            sexo,
            id
        }) 

        await inviteImage(image,id);
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