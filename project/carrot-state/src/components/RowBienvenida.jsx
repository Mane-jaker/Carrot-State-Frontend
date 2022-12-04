import Search from "../continuous/Search"

function RowBienvenida({texto,IsSearch,IsAgent,agentName,codigo}) {
    return ( 
        <>
            <div className="row justify-content-center align-items-center">
                <div className="col-5 justify-content-center align-items-center ">
                    <h2 className="hs justify-content-center align-items-center">
                        {texto}
                    
                        {IsSearch == true &&(
                            <div className="row justify-content-center mt">
                                <div className="col-9 justify-content-center ">
                                    <Search/>
                                </div>   
                            </div> 
                        )}

                        {IsAgent == true &&(
                            <h3 className="mt">{agentName}</h3>
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