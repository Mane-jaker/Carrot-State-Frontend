function ButtonAtom({clas,text,type,Click}){
    return(
        <>
            <a className={clas} type={type} onClick={Click}>{text}</a>
        </>
    )
}

export default ButtonAtom