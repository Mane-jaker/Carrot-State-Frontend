import CarrouselImgItem from "./CarrouselImgItem"
import ItemDescription from "./ItemDescription"
import CloseCard from "../molecules/ClosetheCard"
import TittleCard from "../molecules/CardTittle"

function ItemExtend({comp,clas,cardp,cardg}){

    function cerrar(){
        cardp[0].classList.toggle("dispn")
        cardg[0].classList.toggle("dispn")
        cardp[1].classList.toggle("dispn")
        cardg[1].classList.toggle("dispn")
        cardp[2].classList.toggle("dispn")
        cardg[2].classList.toggle("dispn")
    }

    return(
        <>
            <div className="col-10 fillcard dispn" id={"p"+comp.id}>
                <div className="row"> 
                    <CloseCard cerrar={cerrar}/>
                </div>
                <div className="row justcen">
                    <TittleCard aVar={comp.name}/>
                </div>
                <div className="row mt3">
                    <ItemDescription desc={comp} clas={clas} />
                </div>
                <div className="row mt3">
                    <CarrouselImgItem />
                </div>
            </div>
        </>
    )
}

export default ItemExtend