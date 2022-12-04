import "../style/Home.css"
import StartRow from "../organism/StartRow"
import PublicityBlock from "../organism/PublicityBlock"

function Home(){
    return(
        <div className="row Fondito">
            <div className="col-12 StartRow">
                    <StartRow/>
            </div>
            <div className="row Info">
                <div className="col-5 ColInfo">
                    <PublicityBlock/>
                </div>
            </div>
        </div>
    )
}

export default Home