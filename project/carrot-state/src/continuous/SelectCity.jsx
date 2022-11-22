function SelectCity ({clase,id,titulo,optional}){
    return(
        <>
            <div className="col-10">
                <p>{titulo}</p>
                <select className={clase} id={id} aria-label=".form-select-sm example" ref={optional}>
                    <option value="TXGZCH">Tuxtla Gutierrez, Chiapas</option>
                    <option value="COICH">Coita, Chiapas</option>
                </select>
            </div>
        </>
    )
}

export default SelectCity