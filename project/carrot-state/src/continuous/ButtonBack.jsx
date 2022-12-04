
import retrocesoImg from "../assets/Img/ImgStylesButton/retroceso.png"

function ButtonBack (){    
    return(
        <>
            <button 
            type="button" 
            class="btn btn-success button-back">
                <img className="img-fluid" src={retrocesoImg} alt="Retroceso"/>
            </button>
        </>
    )
}

export default ButtonBack
