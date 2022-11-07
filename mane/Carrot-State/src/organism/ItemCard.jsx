import TextAtom from "../atoms/TextAtom"
import ButtonAtom from "../atoms/ButtonAtom"
import ItemExtend from "./ItemExtend";

function ItemCard({Text1,Text2}){
    const clas = "texti"
    const clas3 = "btn btn-dark add mbo";
    const textMore = "See More";
    const type= "button"

    const cardp = document.getElementById('pc1')
    const cardg = document.getElementById('p1')

    function abrir(){
        cardp.classList.toggle("dispn")  
        cardg.classList.toggle("dispn")
    } 
    /*
    const houses = document.querySelector('.houses');
console.log(houses);
houses.addEventListener ('click', function(){//changes titles, changes add button, not changes content
    document.getElementById('changeabl').classList.remove('disp');
    document.getElementById('changeable').classList.add('disp');
    document.getElementById('changeables').classList.add('disp');
});
    */
    return(
        <>
        <div className="row justcen mt3">
            <ItemExtend desc={Text2} name={Text1} clas={clas} cardg ={cardg} cardp ={cardp}/>
            <div className="col-10 fillcard" id="pc1">
                <div className="row mt3">
                    <TextAtom clas={clas} text={Text1} />
                </div>
                <div className="row">
                    <div className="col-8">
                        <TextAtom clas={clas} text={Text2} />
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