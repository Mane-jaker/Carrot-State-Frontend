function SelectPages({id, optional,change}){
    return(
        <>
            <select className='form-select' id={id} aria-label=".form-select-sm example" ref={optional} onChange={change}>
                <option selected>Selecciona que busca</option>
                <option value="casas">Casas</option>
                <option value="terrenos">Terrenos</option>
                <option value="locales">Locales</option>
            </select>
        </>
    )
}

export default SelectPages