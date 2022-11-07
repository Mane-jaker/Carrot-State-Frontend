import TextAtom from "../atoms/TextAtom"

function ItemDescription({desc,clas}){

    const roms = "Cuartos : 5"
    const price = "Precio: $5600"
    const size = "Tamaño en m225"

    return(
        <>
            <div className="col-8">
                <div className="row justcen">
                    <div className="col-11 exdesc">
                        <TextAtom text={desc} clas={clas} />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row justcen">
                    <div className="col-11 exdesc">
                        <div className="row">
                            <TextAtom text={roms} clas={clas} />
                        </div>
                        <div className="row">
                            <TextAtom text={price} clas={clas} />
                        </div>
                        <div className="row">
                            <TextAtom text={size} clas={clas} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDescription