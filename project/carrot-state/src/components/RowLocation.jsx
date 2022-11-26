import Card from "./Card"


function RowLocation() {
    return ( 
        <>
            <section className="container ">
                <div className="row justify-content-center">
                    <div className="col-5 bor-location">
                        <h2 className="hsblack">Location</h2>
                    </div>
                </div>
                <section className="row mt">
                    <div className="col-4"><Card /></div>
                    <div className="col-4"><Card /></div>
                    <div className="col-4"><Card /></div>
                </section>
            </section>
        </>
     )
}

export default RowLocation