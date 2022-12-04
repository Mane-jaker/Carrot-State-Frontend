import ButtonAtom from "../atoms/ButtonAtom"

function PremisesMolecule(){
    const clas = "btn btn-dark"
    const text = "Premises"
    return(
        <>
            <ButtonAtom clas={clas} text={text} />
        </>
    )
}

export default PremisesMolecule