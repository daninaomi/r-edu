import React from 'react'

const Escola = (props) => {

    console.log('props',props)

    return (
        
        <div>Id da Escola: {props.match.params.id}</div>
    )
}

export default Escola