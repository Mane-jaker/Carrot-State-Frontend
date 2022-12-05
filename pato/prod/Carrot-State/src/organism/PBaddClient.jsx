import AddMolecule from "../molecules/AddMolecule"

function PBaddClient (){

    const text1 = "Client"
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

export default PBaddClient