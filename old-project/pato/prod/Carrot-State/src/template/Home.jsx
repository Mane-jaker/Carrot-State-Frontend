import "../style/Home.css"
import StartRow from "../organism/StartRow"
import PublicityBlock from "../organism/PublicityBlock"

function Home(){
    return(
        <>
            <div className="row StartRow">
                <div className="col-13 ColStart">
                    <StartRow/>
                </div>
            </div>
            <div className="row Info">
                <div className="col-4 ColInfo">
                    <PublicityBlock/>
                </div>
            </div>
        </>
    )
}

export default Home