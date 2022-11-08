function ButtonAtom({clas,text,type,uso,dbtoggle,dbtarget,ariactrl}){
    return(
        <>
            <a className={clas} type={type} onClick={uso} data-bs-toggle={dbtoggle} data-bs-target={dbtarget} aria-controls={ariactrl}>{text}</a>
        </>
    )
}

export default ButtonAtom