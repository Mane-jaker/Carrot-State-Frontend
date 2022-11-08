import ButtonAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";

function BackMoleculeRH(){
    const clase1 = "btn btn-primary BtnBack"
    const text1 = "<-"
    const type = "button"
    const clase2 = "TitleBack"
    const text2 = "Añadir Propiedad"

    return(
        <>
        <div className="col-12">
            <div className="row mt4">
            <div className="col-1">
                <ButtonAtom clas={clase1} text={text1} type={type} />
            </div>
            <div className="col-11 TextCenter">
                <TextAtom clas={clase2} text={text2}/>
            </div>
            </div>
        </div>
        </>
    )
}

export default BackMoleculeRH;