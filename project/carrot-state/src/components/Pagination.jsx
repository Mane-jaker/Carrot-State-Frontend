import React from 'react'
import Card from './Card'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function Pagination() {
  const [data, setData] = useState(null);

  useEffect(function() {
    fetch("http://localhost:8080/house/list")
    .then((response) => {return response.json()})
    .then((response) => {setData(response.data)})
  });

  return (
    <>
        <div className="row">
            {
              data && data.map(houses => ( 
                <div className="col-4">
                  <Card title={houses.name} />
                </div>
              ))
            }
        </div>
    </>
  )
}

export default Pagination