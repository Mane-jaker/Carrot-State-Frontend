
import ksita from '../assets/Img/ksita.jpg'

function InmobilUserCard() {
    return (
        <section className="row justify-content-center">
            <div className="col-12 inmobil-card-client">
                <div className="row">
                    <section className="col-5">
                        <div className="row justify-content-center align-items-center h100p">
                            <div className="col-11">
                                <img className="img-fluid less brdr" src={ksita} alt="ola" />
                            </div>
                        </div>
                    </section>
                    <section className="col-4 less">
                        <div className='row inmobil-name'>Casa en san benito cruz</div>
                        <div className='row inmobil-lctn'>Casa en san uanito cruz en esquina pedro madero y avenida las aguilas frente a el mayeguito y av 15 pte</div>
                        <div className='row'>
                            <small>Comprado por</small>
                            <div className='inmobil-cost'>$150000</div>
                        </div>
                    </section>
                    <section className="col-3 less">
                        <div className='row inf'>
                            <div className='col-12'>Pisos</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        <div className='row inf'>
                            <div className='col-12'>Cuartos</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        <div className='row inf'>
                            <div className='col-12'>Baños</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        {/*<div className='row inf'>
                            <div className='col-5'>vendida por</div>
                            <div className='col-5 spc'>space</div>
                        </div>*/}
                    </section>
                </div>
            </div>
        </section>
    )
}
function InmobilUserCardInter(){
     return (
        <section className="row justify-content-center">
            <div className="col-12 inmobil-card-client">
                <div className="row">
                    <section className="col-5">
                        <div className="row justify-content-center align-items-center h100p">
                            <div className="col-11">
                                <img className="img-fluid less brdr" src={ksita} alt="ola" />
                            </div>
                        </div>
                    </section>
                    <section className="col-4 less">
                        <div className='row inmobil-name'>Casa en san benito cruz</div>
                        <div className='row inmobil-lctn'>Casa en san uanito cruz en esquina pedro madero y avenida las aguilas frente a el mayeguito y av 15 pte</div>
                        <div className='less'>
                            <small>Comprar</small>
                            <button className='btn btn-primary inmobil-buy mt '>$150000</button>
                        </div>
                    </section>
                    <section className="col-3 less">
                        <div className='row inf'>
                            <div className='col-12'>Vendida por</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        <div className='row inf'>
                            <div className='col-12'>Pisos</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        <div className='row inf'>
                            <div className='col-12'>Cuartos</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                        <div className='row inf'>
                            <div className='col-12'>Baños</div>
                            <div className='col-12 spc'>space</div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export { InmobilUserCard, InmobilUserCardInter }


