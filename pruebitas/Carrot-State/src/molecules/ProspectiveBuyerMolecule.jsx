import ButtonAtom from "../atoms/ButtonAtom"

function ProspectiveBuyerMolecule(){
    const clas = "btn btn-dark"
    const type = "button"
    const txt0 = "Prospective Buyer"
    const txt1 = "Client"
    return(
        <>
            <div class="btn-group">
                <ButtonAtom clas={clas} text={txt0} type={type} />
                <ButtonAtom clas={clas} text={txt1} type={type} />
            </div>
        </>
    )
}

export default ProspectiveBuyerMolecule