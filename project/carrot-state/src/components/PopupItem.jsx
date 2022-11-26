
function PopupItem() { {/*este popup va a servir? :v */}
    return ( 
        <>
            <div className="row fondo-deg popup">
                <div className="col-4 thepop">{/*content space */}
                    <div className="row elmtspop">{/*twelve paces for... */}
                        <h3 className="poptittle">Titulo Popup</h3>
                        <div className="col">Subtitulo</div>{/*a 2~3 rem space */}
                        <div className="col">Main Content</div>{/*justified */}
                        <div className="col">
                            <button type="button" class="btn btn-primary btn-sm">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupItem