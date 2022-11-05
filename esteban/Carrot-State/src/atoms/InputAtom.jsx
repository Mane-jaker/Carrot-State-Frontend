function InputAtom({clas,type,place}){
    return(
        <>
            <input type={type} className={clas} placeholder={place} />
        </>
    )
}

export default InputAtom;