import TextAtom from "../atoms/TextAtom"
import InputAtom from "../atoms/InputAtom"
import ButtonAtom from "../atoms/ButtonAtom"

function FormColumnRegister(){
    const clasTitle = "RegisterTitle"
    const txt0 = "Register"
    const inputType = "text"
    const clase = "InputUser"
    const user = "Nombre de usuario"
    const inputType2 = "password"
    const clase1 = "InputCorreo"
    const correo = "Correo"
    const clase2 = "btn btn-primary Tamaño"
    const txt1 = "Ingresar"
    const type1 = "button"
    const clasSub1 = "ClasSub1"
    const txt2 = "Nombre de usuario"
    const clasSub2 = "ClasSub2"
    const txt3 = "Correo"
    const clasSub3 = "ClasSub3"
    const txt4 = "Contraseña"
    const contra = "Contraseña"
    const inputType1 = "text"
    const clase3 = "InputContra"
    const clasSub4 = "ClasSub4"
    const txt5 = "Codigo gerente"
    const inputType3 = "text"
    const clase4 = "InputCodigo"
    const codigo = "Codigo"
    

    return(
        <>
            <div className="FormColumRegister">
            <TextAtom clas={clasTitle} text={txt0}/>
                <div className="InputsRegister">
                    <div className="InputNameRegister">
                        <div className="UserRegister">
                            <TextAtom clas={clasSub1} text={txt2}/>
                        </div>
                        <InputAtom type={inputType} clas={clase} place={user}/>
                    </div>
                    <div className="InputCorreoRegister">
                        <div className="UserRegister">
                            <TextAtom clas={clasSub2} text={txt3}/>
                        </div>
                        <InputAtom type={inputType1} clas={clase1} place={correo}/>
                    </div>
                    <div className="InputPasswordRegister">
                        <div className="UserRegister">
                            <TextAtom clas={clasSub3} text={txt4}/>
                        </div>
                        <InputAtom type={inputType2} clas={clase3} place={contra}/>
                    </div>
                    <div className="InputCodeRegister">
                        <div className="UserRegister">
                            <TextAtom clas={clasSub4} text={txt5}/>
                        </div>
                        <InputAtom type={inputType3} clas={clase1} place={codigo}/>
                    </div>
                    <div className="ButtonAtomRegister">
                        <ButtonAtom clas={clase2} text={txt1} type={type1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormColumnRegister;