import React from 'react'
// import './card.css'

const Card = ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div >
)

// class Card {
//     constructor(novaPosicao, novoNomeCard) {
//         this._posicao = novaPosicao
//         this._nomeCard = novoNomeCard
//     }

//     get posicao() {
//         return this._posicao
//     }

//     set posicao(novaPosicao) {
//         this._posicao = novaPosicao
//     }

//     get nomeCard() {
//         return this._nomeCard
//     }

//     set nomeCard(novoNomeCard) {
//         this._nomeCard = novoNomeCard
//     }
// }

export default Card