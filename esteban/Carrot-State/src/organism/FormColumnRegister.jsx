import TextAtom from "../atoms/TextAtom"
import InputAtom from "../atoms/InputAtom"
import ButtonAtom from "../atoms/ButtonAtom"
import {NavLink} from "react-router-dom"
import { useFormik } from "formik"
import {useDispatch} from 'react-redux'
import { getRegister } from "../Funtions/Funciones"
import {addAgent} from '../features/agent/agentSlice'

function FormColumnRegister(){
    const clasTitle = "RegisterTitle"
    const txt0 = "Register"
    const inputType = "text"
    const clase = "InputUser"

    const inputType2 = "password"
    const clase1 = "InputCorreo"

    const clase2 = "btn btn-primary Tamaño"
    const txt1 = "Ingresar"
    const type1 = "button"
    const clasSub1 = "ClasSub1"
    const txt2 = "Nombre de usuario"
    const clasSub2 = "ClasSub2"
    const txt3 = "Correo"
    const clasSub3 = "ClasSub3"
    const txt4 = "Contraseña"
  
    const inputType1 = "text"
    const clase3 = "InputContra"
    const clasSub4 = "ClasSub4"
    const txt5 = "Codigo gerente"
    const inputType3 = "text"

    const classPie = "RegisterPie"
    const txt6 = "¿tienes una cuenta? da click aqui"

    const distpatch = useDispatch();

    const form = useFormik({
        initialValues: {
            user: "",
            email: "",
            password: "",
            managerCode: "",
        },

        onSubmit: (values) =>{
            let obj = {user:values.user,email:values.email,password:values.password,managerCode:values.managerCode}
                getRegister(obj).catch(err => console.log("xD")).then((data) =>{
                distpatch(addAgent(data.data))
            })
        }
    })
    

    return(
        <>
            <form onSubmit={form.handleSubmit}>
                <div className="FormColumRegister">
                    <TextAtom clas={clasTitle} text={txt0}/>
                    <div className="InputsRegister">
                        <div className="InputNameRegister">
                            <div className="UserRegister">
                                <TextAtom clas={clasSub1} text={txt2}/>
                            </div>
                            <InputAtom type={inputType} clas={clase} 
                             val={form.values.user}
                             di={"user"}
                             mane={"user"}
                             Change={form.handleChange}/>
                        </div>
                        <div className="InputCorreoRegister">
                            <div className="UserRegister">
                                <TextAtom clas={clasSub2} text={txt3}/>
                            </div>
                            <InputAtom type={inputType1} clas={clase1} 
                            di={"email"}
                            mane={"email"}
                            Change={form.handleChange}  val={form.values.email} />
                        </div>
                        <div className="InputPasswordRegister">
                            <div className="UserRegister">
                                <TextAtom clas={clasSub3} text={txt4}/>
                            </div>
                            <InputAtom type={inputType2} clas={clase3} 
                            val={form.values.password}
                            di={"password"}
                            mane={"password"}
                            Change={form.handleChange}/>
                        </div>
                        <div className="InputCodeRegister">
                            <div className="UserRegister">
                                <TextAtom clas={clasSub4} text={txt5}/>
                            </div>
                            <InputAtom type={inputType3} clas={clase1} 
                             val={form.values.managerCode}
                             di={"managerCode"}
                             mane={"managerCode"}
                             Change={form.handleChange}/>
                        </div>
                        <div className="ButtonAtomRegister">
                            <input type="submit" clas={clase2} />
                        </div>
                        <NavLink to="/login"><TextAtom clas={classPie} text={txt6}/></NavLink>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormColumnRegister;