// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import Main from '../../../compSimples/main'
// import ContainerBox from '../../../compSimples/container-box'
// import Card from '../../../card'
// import { addDesafio } from '../../../../actions'
// // import './escola.css'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


// class TurmaDesafios extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {

//         return (
//             <React.Fragment>
//                 <nav>
//                     <Link className="turma__title" to='#'>
//                         <h2>Desafios</h2>
//                     </Link>

//                     <Link className="turma__title" to={`/turmas/${this.props.turmas.id}/alunos`}>
//                         <h2>Alunos</h2>
//                     </Link>
//                     {/* <Link className="turma__title" to={`/turma/${turmas.id}/grupos`}>
//                     <h2>Grupos</h2> 
//                     </Link>*/}
//                 </nav>

//                 <Main className="turma__main">

//                     <ContainerBox className="turma__container">

//                         {this.props.desafios.map(turma => (
//                             <Link className="turma__card" to={`/desafios/${this.props.desafios.id}`}>
//                                 <Card >
//                                     <h2 className="turma__card-title">
//                                         {this.props.desafios.nome}
//                                     </h2>
//                                 </Card>
//                             </Link>
//                         ))}

//                         <Link className="turma__card turma__card-icon" to={`/turma/${this.props.turma.id}/cadastro-desafios`}>
//                             <Card>
//                                 <FaPlusCircle className="turma__icon" />
//                             </Card>
//                         </Link>

//                     </ContainerBox>
//                 </Main>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const turmas = state.turmas[id]
//     const desafios = state.turmas.desafios

//     return {
//         turmas,
//         desafios: desafios.map(desafio => {
//             return state.desafios[desafio];
//         })
//     }
// }

// export default withRouter(connect(mapStateToProps)(TurmaDesafios))

