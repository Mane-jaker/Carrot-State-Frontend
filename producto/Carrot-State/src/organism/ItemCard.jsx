import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"

function ItemCard(){
    const clas = "texti"
    const text1 = "Name"
    const text2 = "jhvwcsajchjbcaxnjssnjbhscijosjcdbhsnjadihzbfveibeeldowñqlbvflnlbfdvlfenkv,fde.v f,n, nc ccb hmd<ajkb jaxsnkjb jnak bjnkjbjkzbjncdbfvnqnv n ncncn n"
    const clas3 = "btn btn-dark add mbo";
    const textMore = "See More";
    const type= "button"

    return(
        <>
        <div className="row fillcard mt3">
        <div className="row mt3">
            <TextAtom clas={clas} text={text1} />
        </div>
        <div className="row">
            <div className="col-8">
            <TextAtom clas={clas} text={text2} />
            </div>
        </div>
        <div className="row">
            <div className="col-3 offset-9">
            <ButtonAtom text={textMore} clas={clas3} type={type}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default ItemCard