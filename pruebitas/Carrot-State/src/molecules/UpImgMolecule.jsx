import React from 'react'
import ButtonAtom from '../atoms/ButtonAtom'

function UpImgMolecule() {

    const clas = "upimg"
    const type = "Button"
    const text = "Subir imagenes"

  return (
    <>
        <div className="col-9">
            <ButtonAtom clas={clas} type={type} text={text}/>
        </div>
    </>
  )
}

export default UpImgMolecule