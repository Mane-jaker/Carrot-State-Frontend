import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"
import {NavLink} from "react-router-dom"

function PublicityBlock(){
    const clasSub1= "Sub1"
    const txt1 ="Una experiencia fresca a la hora de administrar"
    const clasSub2= "Sub2"
    const txt2 ="tus ventas, agentes y muchas mas cosas que podras hacer con Real State Comanaye"
    const clasSub3= "Sub3"
    const txt3 ="Real state es una aplicacion dedicada a la venta de vienes raices, para tener una mejor gestion de todo"
    const classBut = "btn btn-primary infoButton"
    const type = "button"
    const txt4 = "Ingresa a Real State"

    return(
        <>
            <div className="column-6 PublicityContent">
                <TextAtom clas={clasSub1} text={txt1} />
                <TextAtom clas={clasSub2} text={txt2} />
                <TextAtom clas={clasSub3} text={txt3} />
                <NavLink to="/login"><ButtonAtom clas={classBut} text={txt4} type={type} /></NavLink>
                
            </div>
        </>
    )
}

export default PublicityBlock