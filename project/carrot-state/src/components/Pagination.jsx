import React from 'react'
import Card from './Card'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pagination({forAgent}) {

  const {idAgent} = useParams();

  const [dataHouses, setDataHouses] = useState(null);
  const [dataPlots, setDataPlots] = useState(null);
  const [dataPremises, setDataPremises] = useState(null);

  useEffect(function() {

    if(!forAgent){
      fetch("http://localhost:8080/house/list")
      .then((response) => {return response.json()})
      .then((response) => {setDataHouses(response.data)})

      fetch("http://localhost:8080/plot/list")
      .then((response) => {return response.json()})
      .then((response) => {setDataPlots(response.data)})

      fetch("http://localhost:8080/premise/list")
      .then((response) => {return response.json()})
      .then((response) => {setDataPremises(response.data)})
    }

    fetch("http://localhost:8080/house/list/agent/" + idAgent)
    .then((response) => {return response.json()})
    .then((response) => {setDataHouses(response.data)})
    
  },[]);

  return (
    <>
        <div className="row ">
          <div className="row justify-content-center aling-item-center">
            <h2 className='mt'>Casas</h2>
          </div>
          
            {
              dataHouses && dataHouses.map(houses => ( 
                <div className="col-4">
                  <Card title={houses.name} 
                  imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                  desc={houses.description}
                  price={houses.price + "$"}/>
                </div>
              ))
            }
        </div>
        <div className='row'>
          <h2 className='mt'>Terrenos</h2>
            {
              dataPlots && dataPlots.map(houses => ( 
                <div className="col-4">
                  <Card title={houses.name} 
                  imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                  desc={houses.description}
                  price={houses.price + "$"}/>
                </div>
              ))
            }
        </div>
        <div className='row'>
          <h2 className='mt'>Locales</h2>
          {
            dataPremises && dataPremises.map(premises =>( 
              <div className="col-4">
                <Card title={premises.name} 
                imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                desc={premises.description}
                price={premises.price + "$"}/>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Pagination