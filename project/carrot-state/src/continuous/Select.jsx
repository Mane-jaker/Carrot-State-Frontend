import '../styles/stylespage/Register.css'

function Select ({id,titulo, optional,change}){
    return(
        <>
            <p>{titulo}</p>
            <select className='form-select' id={id} aria-label=".form-select-sm example" ref={optional} onChange={change}>
                <option selected>¿Que tipo de registro desea?</option>
                <option value="agente">Agente</option>
                <option value="inmobiliaria">Inmobiliaria</option>
                <option value="cliente">Cliente</option>
            </select>
        </>
    )
}
export default Select