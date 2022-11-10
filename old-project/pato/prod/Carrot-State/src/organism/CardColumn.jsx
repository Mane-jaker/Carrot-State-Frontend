import ItemCard from "./ItemCard"

function CardColumn(){
    const text1 = "Name"
    const text2 = "jhvwcsajchjbcaxnjssnjbhscijosjcdbhsnjadihzbfveibeeldowñqlbvflnlbfdvlfenkv,fde.v f,n, nc ccb hmd<ajkb jaxsnkjb jnak bjnkjbjkzbjncdbfvnqnv n ncncn n"
    
    return(
        <>
            <div className="col-10">
            <ItemCard Text1={text1} Text2={text2}/>
            </div>
        </>
    )
}

export default CardColumn