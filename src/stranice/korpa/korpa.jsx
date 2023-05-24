import React, {useContext} from 'react'
import { PROIZVODI } from '../../proizvodi'
import { ProdavnicaKontekst } from "../../kontekst/prodavnica-kontekst"
import {ElKorpe} from './element-korpe'
import "./korpa.css";

export const Korpa = (props) => {
  const {elKorpe} = useContext(ProdavnicaKontekst)

  return (
    <div className='cart'>
      <div>
        <h1>
          Vaša korpa
        </h1>
      </div>
      <div className='cartItems'>
        {PROIZVODI.map((proizvod) => {
          if (elKorpe[proizvod.id] !== 0) {
            return <ElKorpe data={proizvod} />
          }
        })}
      </div>
    </div>
  )
}
