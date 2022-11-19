
function ImageAtom({clas,ruta,nc}){
    return(
        <>
            <img src={ruta} alt={nc} className={clas} />
        </>
    )
}

export default ImageAtom;