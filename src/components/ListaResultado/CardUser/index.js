import { useEffect, useState } from "react";
import { getImage } from "../../Firebase";

const CardUser = (data)=>{

    const [imageUrl, setImageUrl] = useState('');

    useEffect(()=>{

        async function getUrl(){
            const image = await getImage(data.element.id);
           
            setImageUrl(image);
        }

       getUrl();
    },[data.element.id]);

    return(
        <li className="item">
            <div className="image">
                <img src={imageUrl} alt="user"></img>
            </div>
            <div className="title">
                {data.element.nome}
            </div>
            <div className="details">
                <ul>
                    <li>Profissão: {data.element.profissao}</li>
                    <li>{data.element.idade} Anos de idade</li>
                    <li>Sexo : {data.element.sexo}</li>
                </ul>
            </div>
        </li>
    )
    
}

export default CardUser;