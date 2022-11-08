import TextAtom from "../atoms/TextAtom"

function ItemDescription({desc,clas}){

    return(
        <>
            <div className="col-8">
                <div className="row justcen">
                    <div className="col-11 exdesc">
                        <TextAtom text={desc.description} clas={clas} />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row justcen">
                    <div className="col-11 exdesc">
                        <div className="row">
                            <TextAtom text={desc.rooms} clas={clas} />
                        </div>
                        <div className="row">
                            <TextAtom text={desc.price} clas={clas} />
                        </div>
                        <div className="row">
                            <TextAtom text={desc.size} clas={clas} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDescription