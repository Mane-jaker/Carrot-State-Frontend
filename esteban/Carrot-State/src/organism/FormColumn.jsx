import TextAtom from "../atoms/TextAtom"
import InputAtom from "../atoms/InputAtom"
import ButtonAtom from "../atoms/ButtonAtom"
import {NavLink} from "react-router-dom"
import { useFormik } from "formik"
import { getLogin, getLogin } from "../Funtions/Funciones"
import axios from "axios"
import {useDispatch} from 'react-redux'
import { addIdAgent } from '../features/agent/idAgentSlice'

function FormColumn (){
    const textLogin = "Login"
    const classLogin = "LoginTitle"
    const inputType = "text"
    const clase = "InputUser"
    const clase2 = "btn btn-primary Tamaño"
    const txt1 = "Ingresar"
    const type1 = "button"
    const clasSub1 = "ClasSub1"
    const classPie = "LoginPie"
    const txt4 = "¿No tienes una cuenta? da click aqui"

    const distpatch = useDispatch();

    const form = useFormik({
        initialValues: {
            email:"",
            password:""
        },

        onSubmit: (values) =>{

            let obj = {email:values.email,password:values.password}
            const getLogin = getLogin(obj).catch(err => console.log("x")).then((data) =>{
                distpatch(addIdAgent(data));
                return getLogin;
            })


            if(getLogin != null){
                
            }else{

            }
            /*let obj = {email:values.email,password:values.password}
            getLogin(obj).catch(err => console.log(err)).then((data) => {
                console.log(data)
            })*/

            /*let obj = {email:values.email,password:values.password}
            getLogin(obj).catch(err => console.log("x")).then((data) =>{
                distpatch(addAgent(data.data))
            })*/
        }
    })
    
    
    
    return(
        <>

            <form onSubmit={form.handleSubmit}>
                <div className="FormColumn">
                    <TextAtom clas={classLogin} text={textLogin}/>
                    <div className="Inputs">
                        <div className="InputName">
                            <div className="User">
                                <TextAtom clas={clasSub1} text={"Email"} />
                            </div>
                            <InputAtom 
                            type={inputType} 
                            clas={clase} val={form.values.email} 
                            di={"email"}
                            mane={"email"}
                            Change={form.handleChange}></InputAtom>
                        </div>
                        <div className="InputName">
                            <div className="User">
                                <TextAtom clas={clasSub1} text={"Password"} />
                            </div>
                            <InputAtom 
                            type={inputType} 
                            clas={clase} val={form.values.password}
                            di={"password"}
                            mane={"password"}
                            Change={form.handleChange}
                            ></InputAtom>
                        </div>
                    </div>
                    <div className="ButtonAtom">
                        <input type="submit" clas="Tamaño" />
                    </div>
                </div>
                <NavLink to="/register"><TextAtom clas={classPie} text={txt4}/></NavLink>
            </form>
        </>
    )
}

/*

            <div className="FormColumn">
                    <TextAtom clas={clasTitle} text={txt0}/>
                <div className="Inputs">
                    <div className="InputName">
                        <div className="User">
                            <TextAtom clas={clasSub1} text={txt2} />
                        </div>
                        <InputAtom type={inputType} clas={clase} place={user}/>
                    </div>
                    <div className="InputPassword">
                        <div className="User">
                            <TextAtom clas={clasSub2} text={txt3}/>
                        </div>
                        <InputAtom type={inputType1} clas={clase1} place={password}/>
                    </div>
                    <div className="ButtonAtom">
                        <ButtonAtom clas={clase2} text={txt1} type={type1} />
                    </div>
             
*/

export default FormColumn;
