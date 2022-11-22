import facebook from '../assets/Img/Facebook.png'
import intagram from '../assets/Img/Intagram.png'
import '../styles/style.css'


function Footer (){
    return(
        <div className="row align-items-center">
            <div className="col-4">
                <div className="row align-items-center">
                    <div className="col-3 ">
                        <img src={facebook} alt="ola" className="img-fluid tamaño" />
                    </div>
                    <div className="col-3 ">
                        <img src={intagram} alt="ola" className="img-fluid tamaño" />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <p className="foop mt">Carrot State ©</p>
                <p className="foop">Carrot State esta desarrollado por Real State Comayer  </p>

            </div>
        </div>
    )
}

export default Footer