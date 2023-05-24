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

const vratiUkupnuCenu = (props) => {
    let ukupnaCena = 0;

    for (const el in elKorpe) {
        if (elKorpe[el] > 0) {
            let elInfo = PROIZVODI.find((proizvod) => proizvod.id === Number(el));
            ukupnaCena += elKorpe[el] * elInfo.cena
        }
    }

    return ukupnaCena;
}

const dodajUKorpu = (elId) => {
    setElKorpe((preth) => ({...preth, [elId]: preth[elId] + 1}))
}

const ukloniIzKorpe = (elId) => {
    setElKorpe((preth) => ({...preth, [elId]: preth[elId] - 1}))
}

const azurirajBrojElUKorpi = (noviBrEl, elId) => {
    setElKorpe((preth) => ({...preth, [elId]: noviBrEl}))
}

const kontekstVrednost = {elKorpe, dodajUKorpu, ukloniIzKorpe, azurirajBrojElUKorpi, vratiUkupnuCenu};


    return(
        <ProdavnicaKontekst.Provider value={kontekstVrednost}>
        {   props.children}
        </ProdavnicaKontekst.Provider>
    );
};
