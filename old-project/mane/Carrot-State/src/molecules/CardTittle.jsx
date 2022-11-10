import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"


function CardTittle({aVar}){
    //const aahr = "Agent Add "+aVar+" Request"
    const txtclass = "tittlesforcards"
    const txtEdit = "Edit"
    const editClass = "btn editCardBtn"

    return(
        <>
            <div className="cardtittle mt3 col-10">
                <TextAtom clas={txtclass} text={aVar} />
                <ButtonAtom clas={editClass} text={txtEdit}/>
            </div>
            
        </>
    )
}
export default CardTittle

