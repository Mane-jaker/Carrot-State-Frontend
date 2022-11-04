import ImageAtom from "../atoms/ImageAtom"
import image from "../assets/imgporfile/preso.jpg"

function ImgPorfileMolecule(){
    const clas = "picture"
    const nc = "a"
    const ruta = image

    return(
        <>
            <ImageAtom clas={clas} nc={nc} ruta={ruta}/>
        </>
    )
}

export default ImgPorfileMolecule