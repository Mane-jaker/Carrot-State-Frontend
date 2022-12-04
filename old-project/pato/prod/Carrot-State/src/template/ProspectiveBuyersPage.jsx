import ProspectiveBuyerPageBar from '../organism/ProspectiveBuyerPageBar'
import PBadd from '../organism/PBadd'
import CardColumnPB from '../organism/CardColumnPB'

import '../style/ProspectiveBuyerPage.css'

function ProspectiveBuyerPage(){
    return(
        <>
            <div className="row">
                <div className="col-3 seba">
                    <ProspectiveBuyerPageBar/>
                </div>
                <div className="col-9 cal">
                    <div className="row">
                        <PBadd/>
                    </div>
                    <div className="row mt1 bt justcen">
                        <CardColumnPB/>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProspectiveBuyerPage