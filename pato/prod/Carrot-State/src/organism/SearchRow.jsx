import SearchMolecule from "../molecules/SearchMolecule"
import AddMolecule from "../molecules/AddMolecule"

function SearchRow(){
    return(
        <>
            <div className="row justcen mt1">
                <div className="col-11">
                    <AddMolecule />
                </div>
            </div>
            <div className="row justcen mt3">
                <div className="col-11">
                <SearchMolecule />
                </div>
            </div>
        </>
    )
}

export default SearchRow