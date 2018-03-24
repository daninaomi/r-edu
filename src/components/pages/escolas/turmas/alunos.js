import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class TurmaAlunos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { turma, alunos } = this.props
        console.log('chegou no alunos', alunos)

        return (
            <React.Fragment>
                <nav className="turmas__nav">
                    <Link className="turmas__title" to={`/turmas/${this.props.turma.id}/desafios`}>
                        <h2>Desafios</h2>
                    </Link>

                    <Link className="turmas__title turmas__title--active" to="#">
                        <h2>Alunos</h2>
                    </Link>
                    {/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
                    <h2>Grupos</h2> 
                    </Link>*/}
                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.alunos.map((aluno, index) => (
                            <Card className="turmas__card-aluno">
                                <h2 className="turmas__card-title">
                                    {`${aluno.nome} ${aluno.sobrenome}`}
                                </h2>
                            </Card>
                        ))}

                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]

    return {
        turma,
        alunos: Object.keys(state.alunos).map(key => {
            return state.alunos[key]
        })
    }
}


export default withRouter(connect(mapStateToProps)(TurmaAlunos))

