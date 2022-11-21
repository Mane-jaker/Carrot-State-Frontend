import '../assets/styles/stylesButton/Buttons.css'

function ButtonBlack ({Texto}){
    return(
        <>
            <button 
            type="button" 
            className="btn btn-primary btn-lg ButtonBlack" 
            >
                {Texto}
            </button>
        </>
    ) 
}

export default ButtonBlack