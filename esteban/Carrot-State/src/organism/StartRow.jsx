import ButtonAtom from "../atoms/ButtonAtom"
import TextAtom from "../atoms/TextAtom"

    const clas = "btn btn-primary tamaño"
    const type = "button"
    const txt0 = "Ingresar"
    const clas1 = "btn btn-primary tamaño"
    const type1 = "button"
    const txt1 = "Registrar"
    const clasTitle = "RSC"
    const txt2 = "Real State Comanayer"

function StartRow(){
    return(
        <>
            <div className="row Button">
                <div className="column-6 Content">
                    <div className="column-6 Title">
                        <TextAtom clas={clasTitle} text={txt2} />
                    </div>
                    <div className="Buttons">
                        <div className="ButtonIngresar">
                            <ButtonAtom clas={clas} text={txt0} type={type} />
                        </div>
                        <div className="ButtonRegistrarse">
                            <ButtonAtom clas={clas1} text={txt1} type={type1} />
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default StartRow