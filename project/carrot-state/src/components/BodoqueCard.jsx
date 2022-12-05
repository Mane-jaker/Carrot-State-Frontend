
function BodoqueCard() {
    const nameAgent = "Bodoque"
    const contatoAgent = "Contacto cool"
    return (
        <div className=" col-3 card">
                <img className="card-img-top" src="https://th.bing.com/th/id/OIP.dr49NR3kgozfluWxA8KSBwHaD_?w=328&h=180&c=7&r=0&o=5&pid=1.7" alt="ola" />
            <section className="col-12 infobodoque">
                <div className="mt">nombre: {nameAgent}</div>
                <div className="mt">contacto: {contatoAgent}</div>
                
                <div className="row justify-content-center align-items-center mb mt">
                    <div className="col-8">
                        <button type='button'className="btn btn-primary w100" onClick={"handleOnClick"}>Ver</button>
                    </div>
                </div>   
            </section>
        </div>
    )
}

export default BodoqueCard