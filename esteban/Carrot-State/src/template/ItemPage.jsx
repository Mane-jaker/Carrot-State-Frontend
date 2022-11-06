import "../style/ItemPage.css"
import BackMoleculeRH from "../molecules/BackMoleculeRH.jsx"
import FormularioRh from "../organism/FormularioRH"
import PageSigRh from "../organism/PageSigRh"

function ItemPage(){
    return(
        <div>
            <div className="row SizeRow">
                <div className="row-3 BackPage">
                    <BackMoleculeRH/>
                </div>
                <div className="row-6 CardRegister">
                    <FormularioRh/>
                </div>
                <div className="row-3 SigPage">
                    <PageSigRh/>
                </div>
            </div>
        </div>
    )
}

export default ItemPage