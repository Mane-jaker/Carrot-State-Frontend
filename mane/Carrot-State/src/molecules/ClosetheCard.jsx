import ButtonAtom from "../atoms/ButtonAtom"

function CloseCard({cerrar}){
    const class1 = "btn closebtn"
    const tXt = "X"
    return(
        <>
            <div className="forclosing">
                <ButtonAtom clas={class1} text={tXt} uso={cerrar} />
            </div>
        </>
    )
}
export default CloseCard