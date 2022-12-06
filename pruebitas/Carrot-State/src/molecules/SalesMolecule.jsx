import ButtonAtom from "../atoms/ButtonAtom"

function SalessMolecule(){
    const clas = "btn btn-dark"
    const text = "Sales"
    return(
        <>
            <ButtonAtom clas={clas} text={text} />
        </>
    )
}

export default SalessMolecule