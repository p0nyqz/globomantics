'use client'

import { useState, useRef, useEffect } from 'react'
import HouseRow from './houseRow'

const houseArray = [
  {
    id: 1,
    address: '12 Valey of Kings, Geneva',
    country: 'Switzerland',
    price: 900000,
  },
  {
    id: 2,
    address: '89 Road of Forks, Bern',
    country: 'Switzerland',
    price: 200000,
  },
]

const HouseList = () => {
  const [houses, setHouses] = useState(houseArray)
  const counter = useRef(0)

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/api/houses')
      const houses = await response.json()
      setHouses(houses)
    }
    fetchHouses()
    counter.current++
  }, [])

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: '32 Valley Way, New York',
        country: 'USA',
        price: 1000000,
      },
    ])
  }

  return (
    <>
      <div>
        <div className="row mb-2">
          <h5 className="themeFontColor text-center">
            Houses currently on the market
          </h5>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Address</th>
              <th>Country</th>
              <th>Asking Price</th>
            </tr>
          </thead>
          <tbody>
            {houses.map((h) => (
              <HouseRow key={h.id} house={h} />
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
          Add
        </button>
      </div>
    </>
  )
}

export default HouseList
