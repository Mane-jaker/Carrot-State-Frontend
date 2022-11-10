import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"
import ItemExtend from "./ItemExtend";

function ItemCard({Iteams}){
    const clas = "texti"
    const clas3 = "btn btn-dark add mbo";
    const textMore = "See More";
    const type= "button"

    const cardp1 = document.getElementById('pc1')
    const cardg1 = document.getElementById('p1')
    const cardp2 = document.getElementById('pc2')
    const cardg2 = document.getElementById('p2')
    const cardp3 = document.getElementById('pc3')
    const cardg3 = document.getElementById('p3')

    const cardp = ["cardp1","cardp2","cardp3"]

    const cardg = ["cardg1","cardg2","cardg3"]

    function abrir(){
        cardp1.classList.toggle("dispn")  
        cardg1.classList.toggle("dispn")
        cardp2.classList.toggle("dispn")  
        cardg2.classList.toggle("dispn")
        cardp3.classList.toggle("dispn")  
        cardg3.classList.toggle("dispn")
    } 

    return(
        <>
        <div className="row justcen mt3">
            <ItemExtend comp={Iteams} clas={clas} cardg={cardg} cardp={cardp}/>
            <div className="col-10 fillcard" id={"pc" + Iteams.id}>
                <div className="row mt3">
                    <TextAtom clas={clas} text={Iteams.name} />
                </div>
                <div className="row">
                    <div className="col-8">
                        <TextAtom clas={clas} text={Iteams.description} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 offset-9">
                        <ButtonAtom text={textMore} clas={clas3} type={type} uso={abrir} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemCard