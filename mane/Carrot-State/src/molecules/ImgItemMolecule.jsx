import image from "../assets/imgporfile/preso.jpg"
import ImageAtom from "../atoms/ImageAtom"

function ImgItemMolecule(){
    const clas = "d-block w-100"
    const nc = "a"
    const ruta = image

    return(
        <>
            <ImageAtom clas={clas} nc={nc} ruta={ruta}/>
        </>
    )
}

export default ImgItemMolecule