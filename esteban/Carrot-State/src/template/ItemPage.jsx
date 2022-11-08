import "../style/ItemPage.css"
import BackMoleculeRH from "../molecules/BackMoleculeRH.jsx"
import FormularioRh from "../organism/FormularioRH"
import PageSigRh from "../organism/PageSigRh"


function ItemPage(){
    return(
        <div>
            <div className="row SizeRow">
                <div className="row BackPage">
                    <BackMoleculeRH/>
                </div>
                <div className="row justcen">
                    <FormularioRh/>
                </div>
                <div className="row SigPage">
                    <PageSigRh/>
                </div>
            </div>
        </div>
    )
}

export default ItemPage