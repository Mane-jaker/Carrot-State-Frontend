import ButtonAtom from "../atoms/ButtonAtom"

function HousesMolecule(){
    
    const clas = "btn btn-dark"
    const text = "Houses"
    return(
        <>
            <ButtonAtom clas={clas} text={text} />
        </>
    )
}

export default HousesMolecule