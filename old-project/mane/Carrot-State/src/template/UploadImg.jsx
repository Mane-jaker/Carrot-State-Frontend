import "../style/ItemPage.css"
import BackMoleculeRH from "../molecules/BackMoleculeRH.jsx"
import UpImgMolecule from "../molecules/UpImgMolecule"
import CarrouselUpload from "../organism/CarrouselUpload"

function UploadImg() {
  return (
    <>
        <div className="row SizeRow">
            <div className="row BackPage">
                <BackMoleculeRH />
            </div>
            <div className="row justcen">
                <CarrouselUpload />
            </div>
            <div className="row justcen">
                <UpImgMolecule />
            </div>
        </div>
    </>
  )
}

export default UploadImg