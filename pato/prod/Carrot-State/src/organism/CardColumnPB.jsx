import ItemCard from "./ItemCard"

function CardColumnPB(){
    const text1 = "Name"
    
    return(
        <>
            <div className="col-10">
            <ItemCard Text1={text1}/>
            </div>
        </>
    )
}

export default CardColumnPB