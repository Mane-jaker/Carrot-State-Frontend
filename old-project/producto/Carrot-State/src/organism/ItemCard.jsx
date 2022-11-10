import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"

function ItemCard({Text1,Text2}){
    const clas = "texti"
    const clas3 = "btn btn-dark add mbo";
    const textMore = "See More";
    const type= "button"

    return(
        <>
        <div className="row justcen mt3">
            <div className="col-10 fillcard">
                <div className="row mt3">
                    <TextAtom clas={clas} text={Text1} />
                </div>
                <div className="row">
                    <div className="col-8">
                        <TextAtom clas={clas} text={Text2} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 offset-9">
                        <ButtonAtom text={textMore} clas={clas3} type={type}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemCard