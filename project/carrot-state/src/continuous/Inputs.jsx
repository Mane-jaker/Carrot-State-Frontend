import '../assets/styles/stylesButton/Buttons.css'

function Inputs ({Texto,Type,id}){
    return(
        <div className="d-grid gap-2 col-2 mx-auto">
            <a>{Texto}</a>
            <input type={Type} className="form-control Inputs" id={id} />
        </div>
    )
}

export default Inputs