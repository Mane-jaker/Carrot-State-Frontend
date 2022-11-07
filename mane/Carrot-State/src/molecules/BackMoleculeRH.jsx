import ButtonAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";

function BackMoleculeRH(){
    const clase1 = "btn btn-primary BtnBack"
    const text1 = "<-"
    const type = "button"
    const clase2 = "TitleBack"
    const text2 = "<Selected Items>"

    return(
        <div className="BackMolecule">
            <div className="ButtonBack">
                <ButtonAtom clas={clase1} text={text1} type={type} />
            </div>
            <div className="TextCenter">
                <TextAtom clas={clase2} text={text2}/>
            </div>
        </div>
    )
}

export default BackMoleculeRH;