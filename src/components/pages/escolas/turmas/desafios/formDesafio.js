import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import LinkButton from '../../../../compSimples/linkButton'
import Card from '../../../../card'
import Form from '../../../../compSimples/form'
import FormButton from '../../../../compSimples/form/formButton'
import {
    listaDisciplinas,
    cadastraAula,
    listaDesafios,
    listaTurmas
} from '../../../../../actions'
// import './cadastro-desafio.css'
import FaUserPlus from 'react-icons/lib/fa/user-plus'
import { Accordion, AccordionItem } from 'react-sanfona';


class CadastraDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //   this.props.dispatchListaTurmas()
        //   this.props.dispatchListaDesafios()
        this.props.dispatchListaDisciplinas()
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const aula = {
                // "idProfessor": this.professor.id,
                // "idTurma": this.turma.id,
                // "idDisciplina": this.disciplina.id,
                // "idDesafio": this.desafio.id
            }
            // this.props.cadastraAula(aula)
        }
    }

    render() {

        const { disciplinas, desafio, selecionaDesafio } = this.props
        console.log('nome desafio', desafio)

        const bgColor = {
            'Matemática': '#FF8A80',
            'Português': '#9CCC65'
        }

        return (

            <Main className="escolas__main">
                <ContainerBox className="disciplinas__container">
                    {this.props.desafio &&
                        <h1 className="disciplinas__title">{this.props.desafio.nome}</h1>
                    }
                    <Form onSubmit={this.handleSubmit} className="disciplinas-form">

                        {this.props.disciplinas && this.props.disciplinas.map(disciplina => (
                            <Card
                                className="disciplinas__card"
                                style={{
                                    background: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                }}>
                                <Accordion className="react-sanfona" allowMultiple>

                                    <div className="disciplinas__card-title">
                                        <h2>{disciplina.nome}</h2>
                                        <LinkButton to='/addProf' className="disciplinas__button-add-prof">
                                            <FaUserPlus
                                                className="disciplinas__button-icon"
                                                style={{
                                                    color: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                                }} />
                                        </LinkButton>
                                    </div>
                                    <p className="disciplinas__card-resumo">
                                        Lorem ipsum dolor sit amet
                                    </p>

                                    <AccordionItem className="react-sanfona-item fases-card-title" title={'1ª fase'}>
                                        <div className="fases-card">
                                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel fringilla turpis.'}
                                            <LinkButton
                                                to='/exercicios'
                                                className="fases-button"
                                                style={{
                                                    borderColor: `${bgColor[disciplina.nome] || bgColor['Matemática']}`,
                                                    color: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                                }}>
                                                Exercícios
                                        </LinkButton>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem className="react-sanfona-item fases-card-title" title={'2ª fase'}>
                                        <div className="fases-card">
                                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel fringilla turpis.'}
                                            <LinkButton
                                                to='/exercicios'
                                                className="fases-button"
                                                style={{
                                                    borderColor: `${bgColor[disciplina.nome] || bgColor['Matemática']}`,
                                                    color: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                                }}>
                                                Exercícios
                                        </LinkButton>
                                        </div>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                        ))}
                    </Form>
                    <Form className="cadastra-desafio-form">
                        <FormButton
                            className="cadastra-desafio-form__button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Cadastrar
                        </FormButton>
                    </Form>
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const desafio = state.desafio
    const disciplinas = state.disciplinas

    return {
        turma,
        desafio,
        disciplinas: Object.keys(state.disciplinas).map(key => {
            return state.disciplinas[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    cadastraAula: (aula) => {
        dispatch(cadastraAula(aula))
    },
    // dispatchListaTurmas: () => {
    //     dispatch(listaTurmas())
    // },
    // dispatchListaDesafios: () => {
    //     dispatch(listaDesafios())
    // },
    dispatchListaDisciplinas: () => {
        dispatch(listaDisciplinas())
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastraDesafio))



    // togglCard(event) {
    //     event.preventDefault()
    //     this.toggle("active");
    //     const panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //         panel.style.maxHeight = null;
    //     } else {
    //         panel.style.maxHeight = panel.scrollHeight + "px";
    //     } 
    // }