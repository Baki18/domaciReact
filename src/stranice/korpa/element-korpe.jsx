import React, {useContext} from 'react';
import { ProdavnicaKontekst } from '../../kontekst/prodavnica-kontekst';

export const ElKorpe = (props) => {

    const {id, imeProizvoda, cena, slikaProizvoda } = props.data;
    const {elKorpe, dodajUKorpu, ukloniIzKorpe, azurirajBrojElUKorpi} = useContext(ProdavnicaKontekst);

    return (
        <div className='cartItem'>
            <img src={slikaProizvoda} />
            <div className='description'>
                <p><b>{imeProizvoda}</b></p>
                <p>${cena}</p>
                <div className='countHandler'>
                    <button onClick={() => ukloniIzKorpe(id)}> - </button>
                    <input value={elKorpe[id]} onChange={(e) => azurirajBrojElUKorpi(Number(e.target.value), id)}></input>
                    <button onClick={() => dodajUKorpu(id)}> + </button>
                </div>
            </div>
        </div>
    )
};
