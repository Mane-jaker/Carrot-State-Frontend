import Button from "../continuous/Button"

function Card({imj,title,desc,price}) {
    const typ = "button"
    const clas = "btn btcard"

    return (
        <div className="card text-center">
            <div className="row img">
                <img src={imj} class="card-img-top" alt="..."/>
            </div>
            <div className="row card-body">
                <div className="">
                    <p><h5 class="card-title">{title}</h5></p>
                </div>
                <div className="">
                    <p class="card-text"><small class="text-muted">{desc}</small></p>
                </div>
                <div className="">
                    <p class="card-text">{price}</p>
                </div>
                <div className="mt">
                    <Button Texto="See more" typ={typ} clas={clas}/>
                </div>
            </div>
        </div>
    )
}
export default Card