import '../assets/styles/stylesButton/Buttons.css'

function ButtonBlue ({Texto}){
    return(
        <>
            <button 
            type="button" 
            className="btn btn-primary btn-lg ButtonBlue" 
            >
                {Texto}
            </button>
        </>
    ) 
}

export default ButtonBlue