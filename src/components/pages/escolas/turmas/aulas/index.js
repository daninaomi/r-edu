// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import Main from '../../../../compSimples/main'
// import ContainerBox from '../../../../compSimples/container-box'
// import Card from '../../../../card'
// import {
//     pushPage,
//     listaAulas,
//     listaTurmas,
//     listaDesafios,
//     listaAlunos,
//     listaDisciplinas
// } from '../../../../../actions'
// // import './turmas.css'
// import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
// import bgFoguete from '../../img/card-desafio-foguete.png'
// import bgVulcao from '../../img/card-desafio-vulcao.png'
// import bgCamera from '../../img/card-desafio-camera.png'
// import bgJardim from '../../img/card-desafio-jardim.png'


// class TurmaAula extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     // componentWillReceiveProps() {
//     //     if (this.props.aulas && this.props.aulas.desafio.nome) {
//     //         this.props.dispatchPushPage(this.props.aulas.desafio.nome)
//     //     }
//     // }

//     componentDidMount() {
//         this.props.dispatchListaAulas()
//         this.props.dispatchListaTurmas()
//         // this.props.dispatchListaDesafios()
//         this.props.dispatchListaAlunos()
//         this.props.dispatchListaDisciplinas()
//     }

//     render() {

//         const backgrounds = {
//             'Foguete': bgFoguete,
//             'Vulcão': bgVulcao,
//             'Jardim': bgJardim,
//             'Camera': bgCamera,
//         }

//         const { turma, desafio, aula, alunos } = this.props


//         return (
//             <React.Fragment>
//                 <nav className="turmas__nav">
//                   {/* <div className="aula-header" style={{
//                       width: '100%;',
//                       {this.props.aula &&
//                       backgroundImage: `url('${backgrounds[this.props.aula.desafio.nome] || backgrounds['Foguete']}')`]
//                       }
//                   }}>>
//                   </div> */}

//                     <Link className="turmas__title turmas__title--active" to='#'>
//                         <h2>Fases</h2>
//                     </Link>

//                     <div className="turmas__title">
//                         <h2>Alunos</h2>
//                         {this.props.aulas &&
//                             <Link to={`/aulas/${this.props.aulas.id}/aulaAlunos`}>
//                             </Link>
//                         }
//                     </div>
//                 </nav>

//                 <Main className="escolas__main">

//                     <ContainerBox className="escolas__container">

//                         {/* {{this.state.disciplinasFiltradas && this.state.disciplinasFiltradas.map((disciplina, index) => ( */}
//                             <Card className="disciplina-form__item disciplinas__card"
//                               style={{
//                                   background: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
//                               }}>

//                                 <div className="disciplinas__card-title">
//                                     <h2>{this.state.disciplinasFiltradas[index].nome}</h2>
//                                 </div>

//                                 <div className="fases-card fases-card-title">
//                                 <h4>1ª fase</h4>

//                                 </div>

//                                 <div className="fases-card fases-card-title">
//                                 <h4>2ª fase</h4>

//                                 </div>

//                             </Card>
//                         {/* ))} */}


//                     </ContainerBox>
//                 </Main>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const turma = state.turmas[id]
//     const alunos = state.alunos
//     const aulas = turma && turma.aulas || []

//     return {
//         turma,
//         aula: aulas.filter(aula => {
//             return aulas.idTurma == id
//         }),
//         alunos: Object.keys(state.alunos).map(key => {
//             return state.alunos[key]
//         })
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     dispatchPushPage: page => {
//         dispatch(pushPage(page))
//     },
//     dispatchListaTurmas: () => {
//         dispatch(listaTurmas())
//     },
//     // dispatchListaDesafios: () => {
//     //     dispatch(listaDesafios())
//     // },
//     dispatchListaAlunos: () => {
//         dispatch(listaAlunos())
//     },
//     dispatchListaDisciplinas: () => {
//         dispatch(listaDisciplinas())
//     },
//     dispatchListaAulas: () => {
//         dispatch(listaAulas())
//     }
// })


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurmaAula))
