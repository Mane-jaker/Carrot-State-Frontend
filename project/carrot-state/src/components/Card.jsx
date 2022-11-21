import Button from "../continuous/Button"

function Card() {
    const typ = "button"
    const clas = "btn btcard"

    return (
        <div className="card text-center">
            <div className="row img">
                <img src="https://www.bing.com/th?id=ORMS.4f5f97e3449620aca3115d8122028785&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.9375&p=0" class="card-img-top" alt="..."/>
            </div>
            <div className="row card-body">
                <div className="">
                    <p><h5 class="card-title">Card tittle</h5></p>
                </div>
                <div className="">
                    <p class="card-text"><small class="text-muted">Casa en san Juanito Cruz en esquina Pedro Madero y avenida Las Aguilas frente a El Mayeguito y Av. 15 pte.</small></p>
                </div>
                <div className="">
                    <p class="card-text">$150,000</p>
                </div>
                <div className="mt">
                    <Button Texto="See more" typ={typ} clas={clas}/>
                </div>
            </div>
        </div>
    )
}
export default Card