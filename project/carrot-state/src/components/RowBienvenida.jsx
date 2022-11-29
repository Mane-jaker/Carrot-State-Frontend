import Search from "../continuous/Search"

function RowBienvenida({texto,IsSearch}) {
    return ( 
        <>
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
                </h2>
            </div>
        </>
     )
}

export default RowBienvenida