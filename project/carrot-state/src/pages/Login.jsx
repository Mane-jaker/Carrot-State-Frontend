import { useEffect, useState } from "react"
import { useRef } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Inputs from "../continuous/Inputs"
import '../styles/style.css'
import '../styles/stylespage/Login.css'
import swal from 'sweetalert';
import {addAgent} from '../features/agent/AgentSlice'
import {useDispatch} from 'react-redux'

function Login(){

    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"

    const { loginType } = useParams();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const email = useRef();
    const password = useRef();
    const dispatch = useDispatch()
    
    const handleOnClick = () => {
        setCredentials({email: email.current.value, password: password.current.value})
    }

    const [agentId, setAgent] = useState({
        id:""
    })

    const handleAgentLogin = (response) =>{
        if(response.success){
            if(response.data.success){
                setAgent({id: response.data.logged.id})
                dispatch(addAgent({...agentId}))
                swal('Error',response.message,'error')
            }
            
        }
    }


    const handleRealStateLogin = (response) =>{
        
            if(response.data.success){
                setRealstate({id:response.data.logged.id}) 
                dispatch(addRE)
        
            }
        
    }
    
    const handleClientLogin = (response) =>{
        if(response.data.success){
            let realStateId = response.data.logged.id;
            
        }
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
                    })
                    .then((response) => {return response.json()})
                    .then((response) => { 
                        //handleChange();
                        handleAgentLogin(response);
                    })
                    break;
                }
                case "real-state":{
                    fetch("http://localhost:8080/login/real_state", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    })
                    .then((response) => {return response.json()})
                    .then((response) => {
                        handleRealStateLogin(response);
                    })
                    break;
                }
                case "client":{
                    fetch("", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    })
                    .then((response) => {return response.json()})
                    .then((response) => {
                        handleClientLogin(response);
                    })
                    break;
                }
                case "admin": {
                    fetch("", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    })
                    .then((response) => {return response.json()})
                    .then((response) => {
                        handleClientLogin(response);
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

