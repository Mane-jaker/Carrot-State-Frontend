import FormColumn from "../organism/FormColumn"
import "../style/Login.css"

function LogIn(){
    return(
        <>   
          <div className="row Login">
                <div className="col-3 Card">
                    <FormColumn/>
                </div>
            </div>
        </>
    )
}

export default LogIn