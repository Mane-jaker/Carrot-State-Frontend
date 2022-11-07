import ItemCard from "./ItemCard"
import { GetManager } from "../Funtions/Funciones"
import { useEffect, useState } from 'react'



function CardColumn(){
    
    const [manager, setManager] = useState(null)

    useEffect(() => {
        GetManager(setManager)
    },[])
    
    
    const text1 = manager != null ? ('cola sucia') : ('cola limpia')
    const text2 = "jhvwcsajchjbcaxnjssnjbhscijosjcdbh snjadihzbfveibee ldowñqlbvflnlbfdvlfenkv,fde.vf,n,ncccbhmd<ajkbjaxsnkjbjnakbjnkjbjkzbjncdbfvnqnvn ncncn n jhvwcsajchjbcaxnjssnjbhscijosjcdbh snjadihzbfveibee ldowñqlbvflnlbfdvlfenkv,fde.vf,n,ncccbhmd<ajkbjaxsnkjbjnakbjnkjbjkzbjncdbfvnqnvn ncncn njhvwcsajchjbcaxnjssnjbhscijosjcdbh snjadihzbfveibee ldowñqlbvflnlbfdvlfenkv,fde.vf,n,ncccbhmd<ajkbjaxsnkjbjnakbjnkjbjkzbjncdbfvnqnvn ncncn njhvwcsajchjbcaxnjssnjbhscijosjcdbh snjadihzbfveibee ldowñqlbvflnlbfdvlfenkv,fde.vf,n,ncccbhmd<ajkbjaxsnkjbjnakbjnkjbjkzbjncdbfvnqnvn ncncn n"
    
    return(
        <>
            <div className="col-11 boxc">
            <ItemCard Text1={text1} Text2={text2}/>
            </div>
        </>
    )
}

export default CardColumn