import ItemCard from "./ItemCard"

function CardColumn(){
    return(
        <>
            <div className="col-10">
            <ItemCard />
            <ItemCard />
            </div>
        </>
    )
}

export default CardColumn