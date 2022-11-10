import ButtonAtom from "../atoms/ButtonAtom"

function PlotsMolecule(){
    const clas = "btn btn-dark"
    const text = "Plots"
    return(
        <>
            <ButtonAtom clas={clas} text={text} />
        </>
    )
}

export default PlotsMolecule