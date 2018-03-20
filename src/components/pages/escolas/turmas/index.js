// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

// import TurmaDesafios from './desafios'
// // import TurmaAlunos from './alunos'
// // import TurmaGrupos from './grupos'

// // import { addDesafio } from '../../../../actions'
// // import './escola.css'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



// class Turma extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.props.dispatchPushPage(this.props.turma.nome)
//     }

//     render() {

//         return (
//             <React.Fragment>
                
//                 <TurmaDesafios/>
//                 {/* <TurmaAlunos/> */}
//                 {/* <TurmaGrupos/> */}

//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const turma = state.turmas[id]
//     const desafios = turma.desafios

//     return {
//         turma,
//         desafios: desafios.map(desafio => {
//             return state.desafios[desafio];
//         })
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     dispatchPushPage: page => {
//         dispatch(pushPage(page))
//     }
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Turma))

