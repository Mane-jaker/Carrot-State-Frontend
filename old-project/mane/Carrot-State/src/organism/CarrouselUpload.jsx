import React from 'react'
import ButtonAtom from '../atoms/ButtonAtom'
import CarrouselImgItem from './CarrouselImgItem'

function CarrouselUpload() {

    const clas = "addimg"
    const text = "+"
    const type = "button"

  return (
    <>
        <div className="row FormRH">
            <div className="col-8 ">
                <div className="row justcen">
                    <div className="col-8 mt3">
                        <CarrouselImgItem />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-4 offset-4 centcent">
                        <ButtonAtom clas={clas} text={text} type={type}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default CarrouselUpload