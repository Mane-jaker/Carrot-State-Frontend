
function PopupItem() {
    return ( 
        <>
        
            <div className="row">
                <div className="col-4 offset-4">{/*content space */}
                    <div className="row">{/*twelve paces for... */}
                        <div className="col">Titulo Popup</div>{/*max size */}
                        <div className="col">Subtitulo</div>{/*a 2~3 rem space */}
                        <div className="col">Main Content</div>{/*justified */}
                        <div className="row">{/*popup options  */}
                            <div className="col-6">option 1</div>
                            <div className="col-6">option 3</div>
                        </div>
                    </div>
                </div>
                <div className="col-4">space</div>
            </div>
        </>
    )
}

export default PopupItem