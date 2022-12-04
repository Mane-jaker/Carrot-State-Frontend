import ProspectiveBuyerPageBar from '../organism/ProspectiveBuyerPageBar'
import PBaddClient from '../organism/PBaddClient'
import CardColumnClient from '../organism/CardColumnClient'

import '../style/ProspectiveBuyerPage.css'

function ClientsPage(){
    return(
        <>
            <div className="row">
                <div className="col-3 seba">
                    <ProspectiveBuyerPageBar/>
                </div>
                <div className="col-9 cal">
                    <div className="row">
                        <PBaddClient/>
                    </div>
                    <div className="row mt1 bt justcen">
                        <CardColumnClient/>
                </div>
                </div>
            </div>
        </>
    )
}

export default ClientsPage



