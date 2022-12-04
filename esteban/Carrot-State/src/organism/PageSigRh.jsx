import ButtonAtom from "../atoms/ButtonAtom"

function PageSigRh(){
    const clase1="btn btn-primary BtnImagenRh"
    const type1="btn"
    const text1="Imagenes"
    const clase2="btn btn-primary BtnSend"
    const type2="btn"
    const text2="Send request"

    return(
        <div className="SigRH">
           <div className="BtnImagen">
                <ButtonAtom clas={clase1} text={text1} type={type1}/>
           </div>
           <div className="BtnSendRequest">
                <ButtonAtom clas={clase2} text={text2} type={type2}/>
           </div>
        </div>
    )
}

export default PageSigRh;