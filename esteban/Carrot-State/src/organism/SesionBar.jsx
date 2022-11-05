import ImgPofileMolecule from "../molecules/ImgPorfileMolecule"
import PlotsMolecule from "../molecules/PlotsMolecule"
import HousesMolecule from "../molecules/HousesMolecule"
import PremisesMolecule from "../molecules/PremisesMolecule"
import MenuMolecule from "../molecules/MenuMolecule"



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
        </>
    )
}

export default SesionBar