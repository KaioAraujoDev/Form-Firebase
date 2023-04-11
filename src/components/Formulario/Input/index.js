
const Input = ({label,placeholder,type,id,value,name,aoAlterar,min,max,required}) =>{
    const createInputsText = ()=>{
        return(
            <div className="div-input">
                <label>{label}</label>
                <input className="input-text" required={required} maxLength={max} minLength={min} onChange={aoAlterar} type={type} placeholder={placeholder}/>
                
            </div>
        )
    }

    const createRadioInputs = () => {

        return(
            <div className="radio">
                <input required={true} className="input-radio" onChange={aoAlterar} type={type} value={value} id={id} name={name}/>
                <label>{label}</label>
            </div>
        )
        
    }


    return(
        <div>
            {type !== "radio" ? createInputsText() : createRadioInputs()} 
        </div>
    )
}

export default Input;