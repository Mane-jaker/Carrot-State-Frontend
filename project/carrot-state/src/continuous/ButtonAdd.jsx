import { Link, useParams } from "react-router-dom"
import plusImg from "../assets/Img/ImgStylesButton/plus.png"
import '../styles/style.css'


function ButtonAdd({id}){
    return(
        <>
            <Link 
                to={"/registItem/" + id}
                type="button" 
                class="btn btn-danger buttonAdd">
                    <img className="img-fluid" src={plusImg} alt="Retroceso"/>
            </Link>
        </>
    )
}

export default ButtonAdd