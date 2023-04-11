import "./ListaResultado.css";





const ListaResultado = ({loading,data}) =>{
            
    
    

    return(

        <div className="div-main-list">       
            {loading ? 
                <img src="./img/loading.svg" alt="carregando"></img>
                :
                <ul className="list-main">    
                    {data.length > 0 ? data.map((element,index) =>{
                    return(
                        <li key={index} className="item">
                            <div className="image">
                                {element.image ? <img src={element.image} alt="perfil"></img> : <img src="./img/profile.svg" alt="defaultProfile"></img>}
                                
                            </div>
                            <div className="title">
                                {element.nome}
                            </div>
                            <div className="details">
                                <ul>
                                    <li>Profissão: {element.profissao}</li>
                                    <li>{element.idade} Anos de idade</li>
                                    <li>Sexo : {element.sexo}</li>
                                </ul>
                            </div>
                        </li>

                    )
                    }): false}
                </ul> 
            }
        </div>
    )
}

export default ListaResultado;