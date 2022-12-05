import { Link, useParams } from "react-router-dom"
import plusImg from "../assets/Img/ImgStylesButton/plus.png"
import '../styles/style.css'


function ButtonAdd({id}){
    return(
        <>
            <div className="row ">
                <div className="col-1 Absolute">
                    <div className="col-7">
                        <Link 
                            to={"/registItem/" + id}
                            type="button" 
                            class="btn btn-danger">
                                <img className="img-fluid" src={plusImg} alt="Retroceso"/>
                        </Link>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ButtonAdd