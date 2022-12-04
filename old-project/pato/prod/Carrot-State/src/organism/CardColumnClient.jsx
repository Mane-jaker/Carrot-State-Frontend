import ItemCard from "./ItemCard"

function CardColumnClient(){
    const text1 = "Name"
    
    return(
        <>
            <div className="col-10">
            <ItemCard Text1={text1}/>
            </div>
        </>
    )
}

export default CardColumnClient