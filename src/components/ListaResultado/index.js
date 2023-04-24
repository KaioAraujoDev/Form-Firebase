import "./ListaResultado.css";
import CardUser from "./CardUser";


const ListaResultado = ({loading,data}) =>{
    return(

        <div className="div-main-list">       
            {loading ? 
                <img src="./img/loading.svg" alt="carregando"></img>
                :
                <ul className="list-main">    
                    {data.length > 0 ? data.map((element,index) =>{
                        return(
                            <CardUser key={index} element={element} index={index}/>
                        )
                    }): false}
                </ul> 
            }
        </div>
    )
}

export default ListaResultado;