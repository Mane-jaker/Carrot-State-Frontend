import { useEffect, useState } from "react"
import { useRef } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Inputs from "../continuous/Inputs"
import '../styles/style.css'
import '../styles/stylespage/Login.css'

function Login(){

    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"

    const { loginType } = useParams();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const email = useRef();
    const password = useRef();
    
    const handleOnClick = () => {
        setCredentials({email: email.current.value, password: password.current.value})
    }

    const handleAgentLogin = (response) =>{
        if(response.data.success){
            navigate("/agentPage/" + response.data.logged.id);
        }
        alert(response.message)
    }

    useEffect(() =>{

        if(credentials.email != ""){
            switch(loginType){
                case "agent":{
                    fetch("http://localhost:8080/login/agent", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        body: JSON.stringify(credentials)
                    }).then((response) => {return response.json()})
                    .then((response) => { 
                        handleAgentLogin(response);
                    })
                    break;
                }
                case "real-state":{
                    fetch("", {
                        method: 'POST',
                        headers: {"content-type": "application/json"},
                        body: credentials
                    })
                    break;
                }
                case "client":{
                    fetch("", {
                        method: 'POST',
                        headers: {"content-type": "application/json"},
                        body: credentials
                    })
                    break;
                }
            }
        }
    }, [credentials])

    return(
        <>
            <div className="row fonlog ">
                <div className="container ">
                    <div className="row align-items-center justify-content-center h100">
                        <div className="col-4 logs justify-content-center align-items-center">
                            <div className="row mt">
                                <h1 className="hs">Log-in</h1>
                            </div>
                            <div className="row justify-content-center">
                                <Inputs Texto={"Email"} Type={typ} clas={clas} id={idu} xref={email}/>
                            </div>
                            <div className="row justify-content-center mb">
                                <Inputs Texto={"Password"} Type={typ} clas={clas} id={idu} xref={password}/>
                            </div>
                            <div className="row justify-content-center align-items-center mb ">
                                <button type='button'className="btn btn-primary btn-lg button-size" onClick={handleOnClick}>log-in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

