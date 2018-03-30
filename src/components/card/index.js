import React from 'react'
// import './card.css'

// const Card = ({ children, ...props }) => (
//     <div {...props}>
//         {children}
//     </div >
// )

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posicao: this.posicao,
            nome: this.nome
        }
    }

    render() {
        
        return (
            <div {...this.props}>
                {this.props.children}
            </div >
        )
    }

}

export default Card