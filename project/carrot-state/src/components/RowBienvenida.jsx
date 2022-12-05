import Search from "../continuous/Search"

function RowBienvenida({texto,IsSearch,IsAgent,agentName,codigo}) {
    return ( 
        <>
            <div className="col-12 row justify-content-center  ">
                <div className="col-6">
                    <h2 className="hs">
                        {texto}
                        {IsSearch == true &&(
                            <div className="row justify-content-center mt">
                                <div className="col-9 justify-content-center ">
                                    <Search/>
                                </div>   
                            </div> 
                        )}

                        {IsAgent == true &&(
                            <h3>{agentName}</h3>
                        )}
                    </h2>
                </div>
                {IsAgent == true &&(
                    <div className="row justify-content-end mt ">
                        <div className="col-3 justify-content-end ">
                            <h2 className="hs">Codigo: {codigo}</h2>
                        </div>   
                    </div> 
                )}
            </div>  
        </>
     )
}

export default RowBienvenida