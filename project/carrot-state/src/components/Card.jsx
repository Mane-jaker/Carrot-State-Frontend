import Button from "../continuous/Button"
import '../styles/style.css'
import PopupInmovil from "./PopupInmovil"

function Card({imj,title,desc,price}) {
    const typ = "button"
    const clas = "btn btcard"
    const s = (()=>{
    })

    return (
        <section className="card text-center mt">
            <div className="row img">
                <img src={imj} class="card-img-top" alt="..."/>
            </div>
            <section className="row card-body">
                <div className="mt">
                    <p><h5 class="card-title">{title}</h5></p>
                </div>
                <div className="mt">
                    <p class="card-text"><small class="text-muted">{desc}</small></p>
                </div>
                <div className="mt">
                    <p class="card-text">{price}</p>
                </div>
                <div className="mt">
                    <Button onClick={s} Texto="See more" typ={typ} clas={clas}/>
                </div>
            </section>
        </section>
    )
}
export default Card