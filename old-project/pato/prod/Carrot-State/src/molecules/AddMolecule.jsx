import ButtonAtom from "../atoms/ButtonAtom";

function AddMolecule({Text1,Text2}){

    const clas = "btn textb"
    const clas1 = "btn simbolb"
    const type = "button"

    return(
        <>
            <div className="btn-group add" role="group" aria-label="Basic example">
                <ButtonAtom clas={clas} text={Text1} type={type} />
                <ButtonAtom clas={clas1} text={Text2} type={type} />
            </div>
        </>
    )
}

export default AddMolecule;