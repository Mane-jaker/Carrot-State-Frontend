import ButtonAtom from "../atoms/ButtonAtom"
import TittleMolecule from "../molecules/TittleMolecule"
import ColumnProspective from "../organism/ColumnProspective"
import '../style/Prospective.css'

function ProspectiveBuyerPage(){

    const clase1 = "btn BtBack"
    const text1 = "<-"
    const type = "button"
    const title = "Prospective Buyer"
    const clas = "tittext"

    return(
        <>
            <div className="row page">
                <div className="row justcen">
                    <div className="col-1 mt3">
                        <ButtonAtom clas={clase1} text={text1} type={type} />
                    </div>
                    <div className="col-10">
                        <TittleMolecule title={title} clas={clas}/>  
                    </div>
                </div>
                <div className="row justcen">
                    <div className="col-11 colum">
                        <ColumnProspective />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProspectiveBuyerPage