import React, {useContext} from 'react'
import { PROIZVODI } from '../../proizvodi'
import { ProdavnicaKontekst } from "../../kontekst/prodavnica-kontekst"
import {ElKorpe} from './element-korpe'
import "./korpa.css";
import { useNavigate } from 'react-router-dom';

export const Korpa = (props) => {
  const {elKorpe, vratiUkupnuCenu} = useContext(ProdavnicaKontekst)
  const ukupnaCena = vratiUkupnuCenu()
  const navigacija = useNavigate()

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
      {ukupnaCena >  0? (
          <div className='checkout'>
          <p>Ukupna cena: ${ukupnaCena}</p>
          <button onClick={() => navigacija('/')}>Nastavi kupovinu</button>
      </div>
      ) : (
        <h2>Vaša korpa je trenutno prazna</h2>
      )}
    </div>
  )
}
