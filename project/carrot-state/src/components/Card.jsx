import Button from "../continuous/Button"
import '../styles/style.css'

function Card({imj,title,desc,price}) {
    const typ = "button"
    const clas = "btn btn-primary "


    

    return (
        <section className="card text-center mt">
            <div className="row img">
                <img src={imj} className="card-img-top" alt="..."/>
            </div>
            <section className="row card-body ">
                <div className="col-12">
                    <div className="mt">
                        <p><h5 className="card-title">{title}</h5></p>
                    </div>
                    <div className="mt">
                        <p className="card-text"><small class="text-muted">{desc}</small></p>
                    </div>
                    <div className="mt">
                        <p className="card-text">{price}</p>
                    </div>
                    <div className="row justify-content-center">
                            <Button Texto="See more" typ={typ} clas={clas}/>
                     </div>
                </div>
            </section>
        </section>
    )
}
export default Card