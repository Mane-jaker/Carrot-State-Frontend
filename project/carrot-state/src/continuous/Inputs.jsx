

function Inputs ({Texto,Type,id,clas}){
    return(
        <div className="col-10">
            <p>{Texto}</p>
            <input type={Type} className={clas} id={id} />
        </div>
    )
}

export default Inputs