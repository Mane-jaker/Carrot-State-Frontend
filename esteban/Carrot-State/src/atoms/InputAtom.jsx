function InputAtom({clas,type,val,Change,di,mane,ph}){
    return(
        <>
            <input type={type} className={clas} value={val} onChange={Change} id={di} name={mane} placeholder={ph}/>
        </>
    )
}

export default InputAtom;