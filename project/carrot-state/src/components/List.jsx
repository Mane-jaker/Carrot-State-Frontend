import React from 'react'
import CardAgent from './CardAgent';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function List(){
    const {idAgent} = useParams();   

    [dataAgent, setDataAgent] = useState(null)

    useEffect(function(){
        fetch("http://localhost:8080/" + idAgent)
        .then((response) => {return response.json()})
        .then((response) => {setDataAgent(response.data)})
    },[])

    return(
        <>
            <section className="row ">
                <div className="row justify-content-center aling-item-center">
                    <h2 className='mt'>Agentes</h2>
                </div>
                {
                dataAgent && dataAgent.map(agent => ( 
                    <div className="col-4">
                        <CardAgent title={houses.name} 
                        imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                        desc={houses.description}
                        price={houses.price + "$"}/>
                    </div>
                ))
                }
            </section>
        </>
    )
}

export default List