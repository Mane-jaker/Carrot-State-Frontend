import ItemCard from "./ItemCard"

function CardColumn(){
    return(
        <>
            <div className="col-11 boxc">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            </div>
        </>
    )
}

export default CardColumn