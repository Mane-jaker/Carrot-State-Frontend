import '../style/Home.css'

function ButtonTransparent({texto,Ptext}){
    return(
        <>
            <button type="button" className="btn btn-light button-transparent">
                <h1>{texto}</h1>
                <p>{Ptext}</p>
            </button>
        </>
    )
}

export default ButtonTransparent