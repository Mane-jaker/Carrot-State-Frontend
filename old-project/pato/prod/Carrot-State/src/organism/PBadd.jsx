import AddMolecule from "../molecules/AddMolecule"

function PBadd (){

    const text1 = "Prospective Buyer"
    const text2 = "+"
    return(
        <>
            <div className="row justcen mt1">
                <div className="col-11">
                    <AddMolecule Text1={text1} Text2={text2} />
                </div>
            </div>
        </>
    )
} 

export default PBadd