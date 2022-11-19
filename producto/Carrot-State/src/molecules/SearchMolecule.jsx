import ButtonAtom from '../atoms/ButtonAtom'
import InputAtom from '../atoms/InputAtom'
import SearchAtom from '../atoms/SearchAtom'

function SearchMolecule(){
    const clas1 = "btn searchs"
    const type1 = "button"
    const text1 = <SearchAtom />
    const clas2 = "form-control"
    const type2 = "text"

    return(
        <>
            <div class='input-group'>
                <InputAtom clas={clas2} type={type2} />
                <ButtonAtom clas={clas1} text={text1} type={type1} />
            </div>
        </>
    )
}

export default SearchMolecule