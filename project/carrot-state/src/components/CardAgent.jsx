/*Faltan nombres de clases */
function CardAgent(){
    return(
        <div className="row">
            <div className="col-3">
                <img src="https://www.bing.com/th?id=ORMS.903a5dd2f37f45749f4ffcd7385c2bf8&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.9375&p=0" alt="ola" />
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col-4">Email</div>
                    <div className="col-8">space</div>
                </div>
                <div className="row">
                    <div className="col-4">Nombre</div>
                    <div className="col-8">space</div>
                </div>
                <div className="row">
                    <div className="row">{/*4 */}
                        <div className="col">Estado</div>
                        <div className="col">minispace</div>
                    </div>
                    <div className="row">{/*4 */}
                        <div className="col">Ventas</div>
                        <div className="col">minispace</div>
                    </div>
                    <div className="row">{/*4 */}
                        <div className="col">Propiedades</div>
                        <div className="col">minispace</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAgent