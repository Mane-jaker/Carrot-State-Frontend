
import '../styles/stylespage/InmobiliariaPage.css'
function CardAgent(){
    return(
        <div className="row agent-card">
            <div className="col-3 img-agent-cont">
                <img className="agent-img" src="https://www.bing.com/th?id=ORMS.903a5dd2f37f45749f4ffcd7385c2bf8&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.9375&p=0" alt="ola" />
            </div>
            <div className="col-8 info-agent">
                <div className="row info-agent-data">
                    <div className="col-2 the-info">Email:</div>
                    <div className="col-10 space">space</div>
                </div>
                <div className="row info-agent-data">
                    <div className="col-2 the-info">Nombre:</div>
                    <div className="col-10 space">space</div>
                </div>

                <div className="row info-agent-multidata">
                        <div className="col-2 the-info">Estado:</div>
                        <div className="col-1 space">mini</div>
                        <div className="col-2 offset-1 the-info">Ventas:</div>
                        <div className="col-1 space">mini</div>
                        <div className="col-3 offset-1 the-info">Propiedades:</div>
                        <div className="col-1 space">mini</div>
                </div>
            </div>
        </div>
    )
}

export default CardAgent