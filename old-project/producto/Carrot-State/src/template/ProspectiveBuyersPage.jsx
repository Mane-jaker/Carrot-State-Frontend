import Perfil from '../organism/ProspectiveBuyerPageBar'
import Tittle from '../organism/ProspectiveBuyerPageContent'
import Crd from '../organism/ItemCard'

function ProspectiveBuyerPage(){
    return(
        <>
            <div className="row">
                <div className="col-3">
                    <Perfil></Perfil>
                </div>
                <div className="col-9">
                    <Tittle></Tittle>
                </div>
                <div className="col-9">
                    <Crd></Crd>
                </div>
            </div>
        </>
    )
}

export default ProspectiveBuyerPage