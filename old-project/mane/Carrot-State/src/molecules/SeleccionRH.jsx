import ButtonAtom from "../atoms/ButtonAtom";

function SeleccionRH (){
    const clase1="btn btn-primary BtnType"
    const type1="btn"
    const text1="Casa"
    const text2="Terreno"
    const text3="Local"


    return(
        <div className="BtnSeccRH">
            <div className="Btn1">
                <ButtonAtom clas={clase1} text={text1} type={type1} />
            </div>
            <div>
                <ButtonAtom clas={clase1} text={text2} type={type1}/>
            </div>
            <div className="Btn2">
                <ButtonAtom clas={clase1} text={text3} type={type1}/>
            </div>
        </div> 
    )
}

export default SeleccionRH;