// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

// import TurmaDesafios from './desafios'
// import TurmaAlunos from './alunos'

// import { listaTurmas, pushPage } from '../../../../actions'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


// class Turma extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.props.dispatchListaTurmas()
//         if (this.props.turma) {
//             this.props.dispatchPushPage(this.props.turma.nome)
//         }
//     }

//     render() {

//         const { turma } = this.props

//         return (
//             <React.Fragment>


//                 <TurmaDesafios />
//                 <TurmaAlunos />

//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const turma = state.turmas[id]

//     return {
//         turma
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     dispatchListaTurmas: () => {
//         dispatch(listaTurmas())
//     },
//     dispatchPushPage: page => {
//         dispatch(pushPage(page))
//     }

// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Turma))

