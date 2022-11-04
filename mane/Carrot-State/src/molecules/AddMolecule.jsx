import ButtonAtom from "../atoms/ButtonAtom";

function AddMolecule(){

    const clas = "btn textb"
    const clas1 = "btn simbolb"
    const type = "button"
    const text1 = "Add item"
    const text2 = "+"

    return(
        <>
            <div class="btn-group add" role="group" aria-label="Basic example">
                <ButtonAtom clas={clas} text={text1} type={type} />
                <ButtonAtom clas={clas1} text={text2} type={type} />
            </div>
        </>
    )
}

export default AddMolecule;