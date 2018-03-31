import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona';
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Form from '../../../../compSimples/form'
import Card from '../../../../card'
import LinkButton from '../../../../compSimples/linkButton'
import FormButton from '../../../../compSimples/form/formButton'
import FormInput from '../../../../compSimples/form/formInput'
import {
    listaDisciplinas,
    cadastraAula,
    listaDesafios,
    listaTurmas
} from '../../../../../actions'
import './desafio.css'
import bgFoguete from '../../img/card-desafio-foguete.png'
import bgVulcao from '../../img/card-desafio-vulcao.png'
import bgCamera from '../../img/card-desafio-camera.png'
import bgJardim from '../../img/card-desafio-jardim.png'
import FaUserPlus from 'react-icons/lib/fa/user-plus'


class CadastraDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            disciplinasFiltradas: [...props.disciplinas]
        }
        this.listaDisciplinas = [...props.disciplinas]
        this.disciplinasFiltradas = this.disciplinasFiltradas.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaDesafios()
        this.props.dispatchListaDisciplinas()
    }

    disciplinasFiltradas() {
        switch (this.props.desafio.nome) {
            case 'Foguete':
                return ['Matemática', 'Física', 'Química', 'História']
            case 'Vulcão':
                return ['Geografia', 'Química', 'Biologia', 'Matemática']
            case 'Camera':
                return ['Física', 'Filosofia', 'História', 'Português']
            case 'Jardim':
                return ['Biologia', 'Português', 'Geografia', 'Química']
            default:
                return this.props.disciplinas
        }
    }

    componentWillReceiveProps(nextProps) {
        this.listaDisciplinas = [...nextProps.disciplinas]
        this.setState({ disciplinasFiltradas: [...nextProps.disciplinas] })
    }

    handleChange(name, value, isInvalid, disciplina) {
        console.log('disciplina cheganu', this.disciplina)
        this.setState(selectionDesafio[value].selected = this.disciplinasFiltradas[disciplina.nome])
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

            // this.props.history.push(`/turmas/${this.props.turma.id}`)
        }
    }

    render() {
        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        const bgColor = {
            'Matemática': '#9CCC65',
            'Português': '#FFB74D',
            'Física': '#82B1FF',
            'Química': '#FF8A80',
            'Filosofia': '#FFD42F',
            'Geografia': '#9CCC65',
            'História': '#FFB74D',
            'Biologia': '#82B1FF',
            'Educação Física': '#FF8A80',
            'Ciências': '#FFD42F'
        }

        const { desafios, disciplinas } = this.props

        return (
            <Main className="escolas__main">
                <ContainerBox className="desafios__container">

                    <h1 className="home __title desafios__title">Escolha um desafio</h1>

                    {/* <div className="desafios__select">
                        <select> */}
                    {this.props.desafios && this.props.desafios.map(desafio => (
                        <Card className="desafio__card desafio-link">
                            <FormInput
                                className="cadastro-turma__form-input"
                                type="radio"
                                name="selectionDesafio"
                                placeholder={desafio.nome}
                                value={desafio.nome}
                                onChange={this.handleChange}
                                style={{
                                    backgroundImage: `url('${backgrounds[desafio.nome] || backgrounds['Foguete']}')`
                                }}
                                required
                            />
                            <label
                                className="desafio__card-title"
                                htmlFor="selectionDesafio">
                                {desafio.nome}
                            </label>
                        </Card>
                    ))}
                    {/* </select>
                    </div> */}

                    {this.props.desafio &&
                        <h1 className="disciplinas__title">{this.props.desafio.nome}</h1>
                    }

                    <h1 className="desafios__title">Selecione a disciplina que irá aplicar</h1>

                    <Form onSubmit={this.handleSubmit} className="disciplinas-form">

                        {this.state.disciplinasFiltradas && this.state.disciplinasFiltradas.map(disciplina => (
                            <React.Fragment>
                                <FormInput
                                    className="disciplina__form-input-radio"
                                    type="radio"
                                    name="selection-disciplina"
                                    placeholder={disciplina.nome}
                                    value={disciplina.nome}
                                    onChange={this.handleChange}
                                    style={{
                                        backgroundImage: `url('${backgrounds[disciplina.nome] || backgrounds['Foguete']}')`
                                    }}
                                    required
                                />
                                <label
                                    className="disciplinas__card"
                                    htmlFor="selection-disciplina"
                                    style={{
                                        background: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                    }}>

                                    {/* <Card
                                    className="disciplinas__card"
                                    style={{
                                        background: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                    }}> */}
                                    <Accordion className="react-sanfona" allowMultiple>

                                        <div className="disciplinas__card-title">
                                            <h2>{disciplina.nome}</h2>
                                            {/* <LinkButton to='/addProf' className="disciplinas__button-add-prof">
                                            <FaUserPlus
                                                className="disciplinas__button-icon"
                                                style={{
                                                    color: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                                }} />
                                        </LinkButton> */}
                                        </div>
                                        <p className="disciplinas__card-resumo">
                                            Veja abaixo os detalhes de tarefas dessa disciplina
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
                                    {/* </Card> */}
                                </label>
                            </React.Fragment>
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

    const id = props.match.params.id // const id = 0
    const turma = state.turmas[id]
    const desafio = state.desafio
    const disciplinas = state.disciplinas

    return {
        turma,
        desafios: Object.keys(state.desafios).map(key => {
            return state.desafios[key]
        }),
        disciplinas: Object.keys(state.disciplinas).map(key => {
            return state.disciplinas[key]
        })
    }
}


const mapDispatchToProps = dispatch => ({
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaDesafios: () => {
        dispatch(listaDesafios())
    },
    dispatchListaDisciplinas: () => {
        dispatch(listaDisciplinas())
    },
    cadastraAula: (aula) => {
        dispatch(cadastraAula(aula))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastraDesafio))


// {this.props.desafios && this.props.turma && this.props.desafios.map(desafio => (
//     <Card
//         className="desafio__card desafio-link"
//         onClick={this.handleSubmit}
//         style={{
//             backgroundImage: `url('${backgrounds[desafio.nome] || backgrounds['Foguete']}')`
//         }} >
//             <h2 className="home__card-title">{desafio.nome}</h2>
//     </Card>
// ))}

// disciplinasFiltradas(disciplinas, ...props) {
//     if (this.props.desafio.nome === 'Foguete') {
//         this.setState(disciplinas.nome = ['Matemática', 'Física', 'Química', 'História'])
//     } else if (this.props.desafio.nome === 'Vulcão') {
//         this.setState(disciplinas.nome = ['Geografia', 'Química', 'Biologia', 'Ciências'])
//     } else if (this.props.desafio.nome === 'Camera') {
//         this.setState(disciplinas.nome = ['Física', 'Filosofia', 'Química', 'História'])
//     } else if (this.props.desafio.nome === 'Jardim') {
//         this.setState(disciplinas.nome = ['Biologia', 'Português', 'Geografia'])
//     } else {
//         this.setState({ disciplinasFiltradas: this.props.disciplinas })
//     }
// }