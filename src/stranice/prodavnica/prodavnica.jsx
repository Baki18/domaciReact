import React from 'react'
import {PROIZVODI} from '../../proizvodi'
import {Proizvod} from './proizvod'
import './prodavnica.css'

export const Prodavnica = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Baki SHOP</h1>
        </div>
        <div className='products'>
            {PROIZVODI.map((proizvod) =>
            <Proizvod data={proizvod}/>
            )}
        </div>
    </div>
  )
}
