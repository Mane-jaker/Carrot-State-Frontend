import '../styles/stylespage/Register.css'

function Select ({clase,id,titulo, optional}){
    return(
        <>
            <div className="row align-items-center justify-content-center tamaño">
                <p>{titulo}</p>
                <select className={clase} id={id} aria-label=".form-select-sm example" ref={optional}>
                    <option selected>numero</option>
                    <option value="agente">1</option>
                    <option value="inmobiliaria">2</option>
                    <option value="cliente">3</option>
                </select>
            </div>
        </>
    )
}

export default Select