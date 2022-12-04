import SesionBar from "../organism/SesionBar"
import SearchRow from "../organism/SearchRow"
import CardColumn from "../organism/CardColumn"
import "../style/AgentSesion.css"

function AgentSesion(){
    return(
        <>
            <div className="row">
                <div className="col-3 seba">
                    <SesionBar />
                </div>
                <div className="col-9 cal">
                    <div className="row">
                        <SearchRow />
                    </div>
                    <div className="row mt1 bt justcen">
                       <CardColumn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentSesion