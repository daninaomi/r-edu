// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import Main from '../../../compSimples/main'
// import ContainerBox from '../../../compSimples/container-box'
// import Card from '../../../card'
// // import { addDesafio } from '../../../../actions'
// // import './escola.css'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



// class Sala extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {

//         return (

//             <Main className="sala__main">

//                 <ContainerBox className="sala__container">

//                     {this.props.salas.map(sala => (
//                         <Link className="sala__card" to={`/desafios/${desafios.id}`}>
//                             <Card >
//                                 <h2 className="sala__card-title">
//                                     {sala.ano}
//                                 </h2>
//                                 <h2 className="sala__card-title">
//                                     {sala.denominacao}
//                                 </h2>
//                             </Card>
//                         </Link>
//                     ))}

//                     <Link className="sala__card sala__card-icon" to={`/sala/${this.props.sala.id}/cadastro-desafios`}>
//                         <Card>
//                             <FaPlusCircle className="sala__icon" />
//                         </Card>
//                     </Link>

//                 </ContainerBox>
//             </Main>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id 
//     const sala = state.salas[id]
//     const desafios = sala.desafios 

//     return {
//         sala,
//         desafios: desafios.map(desafio => { 
//             return state.desafios[desafio];
//         })
//     }
// }

// export default withRouter(connect(mapStateToProps)(Sala))

