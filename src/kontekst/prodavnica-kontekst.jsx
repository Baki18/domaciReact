import React, { createContext, useState } from 'react'
import { PROIZVODI } from '../proizvodi';

export const ProdavnicaKontekst = createContext(null);

const getDefaultKorpu = () => {
    let korpa = {}
    for (let i = 1; i <= PROIZVODI.length; i++) {
        korpa[i] = 0
    }
    return korpa;
}

export const ProdavnicaKontekstProvajder = (props) => {
    const [elKorpe, setElKorpe] = useState(getDefaultKorpu());

const dodajUKorpu = (elId) => {
    setElKorpe((preth) => ({...preth, [elId]: preth[elId] + 1}))
}

const ukloniIzKorpe = (elId) => {
    setElKorpe((preth) => ({...preth, [elId]: preth[elId] - 1}))
}

const azurirajBrojElUKorpi = (noviBrEl, elId) => {
    setElKorpe((preth) => ({...preth, [elId]: noviBrEl}))
}

const kontekstVrednost = {elKorpe, dodajUKorpu, ukloniIzKorpe, azurirajBrojElUKorpi};


    return(
        <ProdavnicaKontekst.Provider value={kontekstVrednost}>
        {   props.children}
        </ProdavnicaKontekst.Provider>
    );
};
