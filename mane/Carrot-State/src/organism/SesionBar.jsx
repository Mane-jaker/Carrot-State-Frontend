import ImgPofileMolecule from "../molecules/ImgPorfileMolecule"
import PlotsMolecule from "../molecules/PlotsMolecule"
import HousesMolecule from "../molecules/HousesMolecule"
import PremisesMolecule from "../molecules/PremisesMolecule"
import MenuMolecule from "../molecules/MenuMolecule"
import SalessMolecule from "../molecules/SalesMolecule"
import SettingsMolecule from "../molecules/SettingsMolecule"

function SesionBar(){
    return( 
        <> 
        <div className="row img-porfile mt">
            <ImgPofileMolecule />
         </div>
         <div className="row button-state mt">
            <HousesMolecule />
         </div>
         <div className="row button-state mt2">
            <PlotsMolecule/>
         </div>
         <div className="row button-state mt2">
            <PremisesMolecule />
         </div>
         <div className="row space mt2">
            <MenuMolecule />
         </div>
         <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
               <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
               <div className="row button-state mt">
                  <SalessMolecule />
               </div> 
               <div className="row button-state mt">
                  <SettingsMolecule />
               </div> 
            </div>
         </div>
        </>
    )
}

export default SesionBar