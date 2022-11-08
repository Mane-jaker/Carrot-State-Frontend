import ButtonAtom from "../atoms/ButtonAtom"

function MenuMolecule(){
    const clas = "btn button-menu"
    const text = ""
    const dattog = "offcanvas"
    const dattarg = "#offcanvasExample"
    const ariactrl = "offcanvasExample"
    const typeb = "button"
    return(
        <>
            <ButtonAtom clas={clas} text={text} type={typeb} dbtarget={dattarg} dbtoggle={dattog} ariactrl={ariactrl} />
        </>
    )
}

export default MenuMolecule