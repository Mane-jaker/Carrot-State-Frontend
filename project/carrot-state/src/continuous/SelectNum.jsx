function SelectNum ({clase,id,titulo,optional,Num}){
    return(
        <>
            <div>
                <p>{titulo}</p>
                <select className={clase} id={id} aria-label=".form-select-sm example" ref={optional}>
                    <option selected>{Num}</option>
                    <option value="1">Uno</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                    <option value="4">Cuatro</option>
                    <option value="5">Cinco</option>
                </select>
            </div>
        </>
    )
}

export default SelectNum