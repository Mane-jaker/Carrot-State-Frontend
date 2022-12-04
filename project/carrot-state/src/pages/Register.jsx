import '../styles/stylespage/Register.css'
import '../styles/style.css'
import Inputs from '../continuous/Inputs'
import Select from '../continuous/Select'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register(){

    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const option = useRef();
    const name = useRef();
    const password = useRef();
    const email = useRef();
    const commissionAgent = useRef();
    const managerCode = useRef();

    const handleOnClick = () =>{
        switch(option.current.value){
            case "inmobiliaria": {
                fetch("http://localhost:8080/real_state", {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.current.value, 
                        password: password.current.value, 
                        email: email.current.value, 
                        commissionAgent: parseFloat(commissionAgent.current.value)})
                }).then((response) => {return response.json()})
                .then((response) => { 
                    console.log(response.message)
                    navigate("/login/real-state");
                })
                break;
            }
            case "agente":{
                fetch("http://localhost:8080/agent", {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.current.value, 
                        password: password.current.value, 
                        email: email.current.value, 
                        managerCode: managerCode.current.value})
                }).then((response) => {return response.json()})
                .then((response) => { 
                    console.log(response.message)
                    navigate("/login/agent");
                })
                break;
            }
            case "cliente":{

                break;
            }
        }
    }

    const handlerOnChange = (e) =>{
        setSelected(option.current.value);
    }

    useEffect(() =>{}, [selected])
    
    const typ = "password"
    const clas ="form-control inp"
    const idu = "user"
    return(
        <>
            <div className="row fonlog">{/*puede ser un article? */}
                <div className="container">
                    <div className="row align-items-center justify-content-center h100">
                        <section className="col-4 logs">
                            <div className="row mt">
                                <h1 className="hs">Registro</h1>
                            </div>
                            <section className="row align-items-center justify-content-center ">
                                <div className="col-10 ">
                                    
                                    <Select titulo={"Opciones de registro"} id={"select-register"} optional={option} change={handlerOnChange}/>
                                    
                                    {/*<select className={"select-size"} aria-label=".form-select-sm example" ref={option} onChange={handlerOnChange}>
                                        <option selected>¿Que tipo de registro desea?</option>
                                        <option value="agente">Agente</option>
                                        <option value="inmobiliaria">Inmobiliaria</option>
                                        <option value="cliente">Cliente</option>
                                    </select>*/}
                                </div>
                            </section>
                            <div className="row justify-content-center">
                                <Inputs Texto={"Username"} Type={typ} clas={clas} id={idu} xref={name}/>
                            </div>
                            <div className="row justify-content-center">
                                <Inputs Texto={"Correo"} Type={typ} clas={clas} id={idu} xref={email}/>
                            </div>
                            <div className="row justify-content-center mb">
                                <Inputs Texto={"Password"} Type={typ} clas={clas} id={idu} xref={password}/>
                            </div>
                            {selected == "agente" && (
                                <div className="row justify-content-center mb">
                                    <Inputs Texto={"codigo de inmobiliaria"} Type={typ} clas={clas} id={idu} xref={managerCode}/>
                                </div>
                            )}
                            {selected == "inmobiliaria" && (
                                <div className="row justify-content-center mb">
                                    <Inputs Texto={"comision de agente"} Type={typ} clas={clas} id={idu} xref={commissionAgent}/>
                                </div>
                            )}
                            <div className="row justify-content-center align-items-center mb ">
                                <div className="col-5">
                                    <button type='button'className="btn btn-primary w100" onClick={handleOnClick}>Register</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register