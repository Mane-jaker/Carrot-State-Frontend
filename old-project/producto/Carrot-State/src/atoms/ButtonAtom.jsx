function ButtonAtom({clas,text,type}){
    return(
        <>
            <a className={clas} type={type}>{text}</a>
        </>
    )
}

export default ButtonAtom