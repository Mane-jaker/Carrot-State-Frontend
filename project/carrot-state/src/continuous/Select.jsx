function Select ({clase,id,titulo}){
    return(
        <>
            <div>
                <p>{titulo}</p>
                <select className={clase} id={id} aria-label=".form-select-sm example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">four</option>
                    <option value="5">five</option>
                </select>
            </div>
        </>
    )
}

export default Select