import CarrouselImgItem from "./CarrouselImgItem"
import ItemDescription from "./ItemDescription"
import CloseCard from "../molecules/ClosetheCard"
import TittleCard from "../molecules/CardTittle"

function ItemExtend({desc,name,clas,cardp,cardg}){
    const aVar = "House"//esta deberia ir en los parametros :3

    function cerrar(){
        cardp.classList.toggle("dispn")
        cardg.classList.toggle("dispn")
    }

    const ola = cerrar;
    return(
        <>
            <div className="col-10 fillcard dispn" id="p1">
                <div className="row"> 
                    <CloseCard cerrar={ola}/>
                </div>
                <div className="row justcen">
                    <TittleCard aVar={aVar}/>
                </div>
                <div className="row mt3">
                    <ItemDescription desc={desc} clas={clas} />
                </div>
                <div className="row mt3">
                    <CarrouselImgItem />
                </div>
            </div>
        </>
    )
}

export default ItemExtend