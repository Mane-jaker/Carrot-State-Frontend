import ButtonAtom from "../atoms/ButtonAtom"

function SettingsMolecule(){
    const clas = "btn btn-dark"
    const text = "Settings"
    return(
        <>
            <ButtonAtom clas={clas} text={text} /> 
            
        </>
    )
}

export default SettingsMolecule