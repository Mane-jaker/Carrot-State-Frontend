import ItemCard from "./ItemCard"
import { getHouse, getPlot, getPremise } from "../Funtions/Funciones"
import { useEffect, useState } from 'react'



function CardColumn({selectedItem}){
    
    const [houses, setHouse] = useState(null)
    const [plots, setPlot] = useState(null)
    const [premises, setPremise] = useState(null)

    const casas = [
        {
            id: "1",
            name: "Casa en Suchiapa",
            description: "Casa Bonita",
            price: 20000,
            size: 20,
            location: "direccion_casa",
            bathRoomNum: 2,
            rooms: 2,
            floors: 2
        },
        {
            id: "2",
            name: "Casa en Coita",
            description: "Casa Bonita",
            price: 20000,
            size: 20,
            location: "direccion_casa",
            bathRoomNum: 2,
            rooms: 2,
            floors: 2
        },
        {
            id: "3",
            name: "Casa en Tijuana",
            description: "Casa Bonita",
            price: 20000,
            size: 20,
            location: "direccion_casa",
            bathRoomNum: 2,
            rooms: 2,
            floors: 2
        }
    ]

 
    if(selectedItem == "houses"){
        useEffect(() =>{
            getHouse(1).then((data) =>{
                setHouse(data.data)
            })
        }, [])
    }
    if(selectedItem == "plots"){
        useEffect(() =>{
            getPlot(1).then((data) =>{
                setHouse(data.data)
            })
        }, [])
    }
    if(selectedItem == "premises"){
        useEffect(() =>{
            getPremise(1).then((data) =>{
                setHouse(data.data)
            })
        }, [])
    }
    
    return(
        <>
            <div className="col-11 boxc">
                {
                    casas.map((casas)=>(
                        <ItemCard Iteams={casas} />
                    ))
                }
            </div>
        </>
    )
}

export default CardColumn