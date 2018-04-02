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
            desafioEscolhido: [...props.desafios],
            disciplinasFiltradas: [...props.disciplinas]
        }
        this.listaDisciplinas = [...props.disciplinas]
        this.disciplinasFiltradas = this.disciplinasFiltradas.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeDisciplina = this.handleChangeDisciplina.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaDesafios()
        this.props.dispatchListaDisciplinas()
    }

    disciplinasFiltradas(nome) {
        switch (nome) {
            case 'Foguete':
                return this.props.disciplinas.filter( disciplina => (
                    ['Matemática', 'Física', 'Química', 'História'].indexOf(disciplina.nome) !== -1
                ))
                
            case 'Vulcão':
                return this.props.disciplinas.filter(disciplina => (
                    ['Geografia', 'Química', 'Biologia', 'Matemática'].indexOf(disciplina.nome) !== -1
                ))

            case 'Camera':
                return this.props.disciplinas.filter(disciplina => (
                    ['Física', 'Filosofia', 'História', 'Português'].indexOf(disciplina.nome) !== -1
                ))
                
            case 'Jardim':
                return this.props.disciplinas.filter(disciplina => (
                    ['Biologia', 'Português', 'Geografia', 'Química'].indexOf(disciplina.nome) !== -1
                ))
        }
    }

    componentWillReceiveProps(nextProps) {
        this.listaDisciplinas = [...nextProps.disciplinas]
        this.setState({ disciplinasFiltradas: [...nextProps.disciplinas] })
    }

    handleChange(name, value, isInvalid, desafios) {
        this[name] = value;
        this.setState({ isInvalid })
    
        const desafiosFiltrados = this.props.desafios.filter(desafio => desafio.id == value)

        this.setState({ isInvalid, disciplinasFiltradas: this.disciplinasFiltradas(desafiosFiltrados[0].nome)})
    }

    handleChangeDisciplina(name, value, isInvalid, disciplinas) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const aula = {
                "idProfessor": this.user.id,
                "idTurma": this.turma.id,
                "idDisciplina": this.disciplina.id,
                "idDesafio": this.desafioEscolhido.id
            }
            this.props.cadastraAula(aula)

            this.props.history.push(`/turmas/${this.props.turma.id}`)
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
                    <Form className="cadastra-desafio-form" onSubmit={this.handleSubmit}>

                        <h1 className="home __title desafios__title">Escolha um desafio</h1>

                        <ul className="desafios__types">

                            {this.props.desafios && this.props.desafios.map((desafio, index) => (
                                <li className="desafios__card desafios-link">
                                    <FormInput
                                        className="desafios-card__input-radio"
                                        type="radio"
                                        name="idDesafio"
                                        id={`selectionDesafio-${index}`}
                                        placeholder={desafio.nome}
                                        value={desafio.id}
                                        onChange={this.handleChange}
                                        style={{
                                            backgroundImage: `url('${backgrounds[desafio.nome] || backgrounds['Foguete']}')`
                                        }}
                                        required
                                    />
                                    <label
                                        className="desafios-card__label"
                                        htmlFor={`selectionDesafio-${index}`}>
                                        {desafio.nome}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        {/* {this.componentWillReceiveProps.disciplinasFiltradas && */}

                        <ContainerBox className="disciplinas__container">
                            <h1 className="desafios__title">Selecione a disciplina que irá aplicar</h1>

                            <Form className="disciplinas-form">

                                {this.state.disciplinasFiltradas && this.state.disciplinasFiltradas.map((disciplina, index) => (
                                    <Card className="disciplina-form__item">
                                        <FormInput
                                            className="disciplinas-form-input-radio"
                                            type="radio"
                                            name="selectionDisciplina"
                                            id={`selectionDisciplina-${index}`}
                                            placeholder={disciplina.nome}
                                            value={disciplina.nome}
                                            onChange={this.handleChangeDisciplina}
                                            style={{
                                                backgroundImage: `url('${backgrounds[disciplina.nome] || backgrounds['Foguete']}')`
                                            }}
                                            required
                                        />
                                        <label
                                            className="disciplinas__card"
                                            htmlFor={`selectionDisciplina-${index}`}
                                            style={{
                                                background: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
                                            }}>

                                            <Accordion className="react-sanfona" allowMultiple>

                                                <div className="disciplinas__card-title">
                                                    <h2>{this.state.disciplinasFiltradas[index].nome}</h2>
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
                                                                borderColor: `${bgColor[this.disciplinasFiltradas.nome] || bgColor['Matemática']}`,
                                                                color: `${bgColor[this.disciplinasFiltradas.nome] || bgColor['Matemática']}`
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
                                                                borderColor: `${bgColor[this.disciplinasFiltradas.nome] || bgColor['Matemática']}`,
                                                                color: `${bgColor[this.disciplinasFiltradas.nome] || bgColor['Matemática']}`
                                                            }}>
                                                            Exercícios
                                                        </LinkButton>
                                                    </div>
                                                </AccordionItem>
                                            </Accordion>
                                        </label>
                                    </Card>
                                ))}
                            </Form>
                            <FormButton
                                className="cadastra-desafio-form__button"
                                type="submit"
                                disabled={this.state.isInvalid}>
                                Cadastrar
                            </FormButton>
                        </ContainerBox>

                        {/* } */}
                    </Form>
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id // const id = 0
    const turma = state.turmas[id]
    const desafios = state.desafios
    const disciplinas = state.disciplinas
    const user = state.user

    return {
        turma,
        user: Object.keys(state.user).map(key => {
            return state.user[key]
        }),
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

{/* < LinkButton to = '/addProf' className = "disciplinas__button-add-prof" >
    <FaUserPlus
        className="disciplinas__button-icon"
        style={{
            color: `${bgColor[disciplina.nome] || bgColor['Matemática']}`
        }} />
</LinkButton > */}