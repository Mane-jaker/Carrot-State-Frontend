
import siguienteImg from "../assets/Img/ImgStylesButton/siguiente.png"

function buttonNext(){
    return(
        <>
            <button 
            type="button" 
            class="btn btn-success button-next">
                <img className="img-fluid" src={siguienteImg} alt="Siguiente"/>
            </button>
        </>
    )
}

export default buttonNext