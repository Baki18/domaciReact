import React, { useContext } from 'react'
import { ProdavnicaKontekst } from "../../kontekst/prodavnica-kontekst";

export const Proizvod = (props) => {
    const {id, imeProizvoda, cena, slikaProizvoda } = props.data;
    const {dodajUKorpu, elKorpe} = useContext(ProdavnicaKontekst)

    const brojElKorpa = elKorpe[id]

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
            Dodaj u korpu {brojElKorpa > 0 && <>({brojElKorpa})</>}
        </button>
    </div>;
}
