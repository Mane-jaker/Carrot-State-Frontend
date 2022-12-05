import facebook from '../assets/Img/Facebook.png'
import intagram from '../assets/Img/Intagram.png'
import '../styles/style.css'


function Footer (){
    return(
        <section className="row align-items-center">
            <div className="col-4">
                <section className="row align-items-center">
                    <div className="col-3">
                        <img src={facebook} alt="ola" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-10">
                                <img src={intagram} alt="ola" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="col-4">
                <p className="foop mt">Carrot State ©</p>
                <p className="foop">Carrot State esta desarrollado por Real State Comayer  </p>
            </section>
        </section>
    )
}

export default Footer