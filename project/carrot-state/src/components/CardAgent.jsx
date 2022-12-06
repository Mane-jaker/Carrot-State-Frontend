
import '../styles/stylespage/InmobiliariaPage.css'
function CardAgent(){
    return(
        <section className="row justify-content-center">
            <div className="col-9 agent-card">
                <div className="row">
                    <div className="col-3">
                            <div className="row justify-content-center align-items-center h100p">
                                <div className="col-11">
                                    <img className="img-fluid" src="https://www.bing.com/th?id=ORMS.903a5dd2f37f45749f4ffcd7385c2bf8&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.9375&p=0" alt="ola" />
                                </div>
                            </div>
                    </div>
                    <section className="col-8 info-agent">
                        <div className="row info-agent-data">
                            <div className="col-2 the-info">Nombre:</div>
                            <div className="col-10 space"><h6>space</h6></div>
                        </div>
                        <div className="row info-agent-data">
                            <div className="col-2 the-info">Email:</div>
                            <div className="col-10 space"><h6>space</h6></div>
                        </div>
                        <section className="row info-agent-multidata">
                                <div className="col-2 the-info">Estado:</div>
                                <div className="col-1 space"><h6>mini</h6></div>
                                <div className="col-2 offset-1 the-info">Ventas:</div>
                                <div className="col-1 space"><h6>mini</h6></div>
                                <div className="col-3 offset-1 the-info">Propiedades:</div>
                                <div className="col-1 space"><h6>mini</h6></div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default CardAgent