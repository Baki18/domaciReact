import React, { useContext } from 'react'
import { ProdavnicaKontekst } from "../../kontekst/prodavnica-kontekst";

export const Proizvod = (props) => {
    const {id, imeProizvoda, cena, slikaProizvoda } = props.data;
    const {dodajUKorpu} = useContext(ProdavnicaKontekst)
    return  <div className='product'>
        <img src={slikaProizvoda}/>
        <div className='description'>
            <p>
                <b>{imeProizvoda}</b>
            </p>
            <p>
                ${cena}
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => dodajUKorpu(id)}>
            Dodaj u korpu
        </button>
    </div>;
}
