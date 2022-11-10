import TextAtom from "../atoms/TextAtom"
import InputAtom from "../atoms/InputAtom"
import ButtonAtom from "../atoms/ButtonAtom"

function FormColumn (){
    const clasTitle = "LoginTitle"
    const txt0= "Login"
    const inputType = "text"
    const clase = "InputUser"
    const user = "Usuario"
    const inputType1 = "password"
    const clase1 = "InputContra"
    const password = "Password"
    const clase2 = "btn btn-primary Tamaño"
    const txt1 = "Ingresar"
    const type1 = "button"
    const clasSub1 = "ClasSub1"
    const txt2 = "Usuario"
    const clasSub2 = "ClasSub2"
    const txt3 = "Contraseña"
    const classPie = "LoginPie"
    const txt4 = "¿No tienes una cuenta? da click aqui"
    return(
        <>
            <div className="FormColumn">
                    <TextAtom clas={clasTitle} text={txt0}/>
                <div className="Inputs">
                    <div className="InputName">
                        <div className="User">
                            <TextAtom clas={clasSub1} text={txt2}/>
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
                </div>
                    <TextAtom clas={classPie} text={txt4}/>
            </div>
        </>
    )
}

export default FormColumn;
