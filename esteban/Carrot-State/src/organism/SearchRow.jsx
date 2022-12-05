import SearchMolecule from "../molecules/SearchMolecule"
import AddMolecule from "../molecules/AddMolecule"

function SearchRow(){
    const text1 = "ADD PROPIETY"
    const text2 = "+"
    return(
        <>
            <div className="row justcen mt1">
                <div className="col-11">
                    <AddMolecule Text1={text1} Text2={text2} />
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