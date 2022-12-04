
function Button ({Texto,typ,clas}){
    return(
        <>
            <a
            type={typ}
            className={clas}
            >
                {Texto}
            </a>
        </>
    ) 
}

export default Button