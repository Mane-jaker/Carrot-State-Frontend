

function Inputs ({Texto,Type,id,clas,xref}){
    return(
        <div className="col-10">
            <p>{Texto}</p>
            <input type={Type} className={clas} id={id} ref={xref}/>
        </div>
    )
}

export default Inputs