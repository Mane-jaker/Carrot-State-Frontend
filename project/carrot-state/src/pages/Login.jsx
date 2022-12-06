import { useEffect, useState } from "react"
import { useRef } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import {v4 as uuid} from 'uuid'
import { useDispatch } from "react-redux"
import { updateUser,addUser } from "../features/user/userSlice"
import Inputs from "../continuous/Inputs"
import '../styles/style.css'
import '../styles/stylespage/Login.css'
import { useSelector } from "react-redux"

function Login(){



    const [user, setUser] = useState({
        id: 9,
        token: 2
    })
    

    const User = useSelector (state => state.users)
    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"
    const dispatch = useDispatch();
    const params = useParams()

    const { loginType } = useParams();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const email = useRef();
    const password = useRef();

    const handleOnClick = () => {
        dispatch(addUser({
            ...user 
        })) 
        navigate("/agentPage/" + user.id)        
        //setCredentials({email: email.current.value, password: password.current.value})
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
                    }).then((response) => {
                        response.headers.get("Authorization")
                        return response.json()})
                        
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
                        <section className="col-4 logs justify-content-center align-items-center">
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
                                <div className="col-5">
                                    <button type='button'className="btn btn-primary w100" onClick={handleOnClick}>log-in</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

