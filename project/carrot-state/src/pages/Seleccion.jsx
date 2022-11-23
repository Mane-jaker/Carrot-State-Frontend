import ButtonTransparent from "../continuous/ButtonTransparent"


function Seleccion(){
    return(
        <>
            <div className="row compra">
                <div className="col-6">
                    <ButtonTransparent texto={"¿Buscas vender casas?"} Ptext={"Preciona de este lado"}/>
                </div>
                <div className="col-6 venta">
                    <ButtonTransparent texto={"¿Buscas comprar casas?"} Ptext={"Preciona de este lado"}/>
                </div>
            </div>
        </>
    )
}

export default Seleccion