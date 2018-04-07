import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import Select from '../../compSimples/form/select'
import FormButton from '../../compSimples/form/formButton'
import FormInput from '../../compSimples/form/formInput'
import { cadastraTurma } from '../../../actions'
import './cadastro-turma.css'


class AddTurma extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(name, value, isInvalid) {
        if (value === '') {
            this.setState({ isInvalid: true })
        }
        this[name] = value;
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const turma = {
                // idEscola: this.props.match.params.id,
                idEscola: 1,
                ano: this.ano,
                serie: this.serie,
                statusTurma: 1,
                descricao: this.descricao,
                nome: `${this.serie} ${this.descricao}`
            }
debugger;
            this.props.cadastraTurma(turma)
        }
    }

    render() {

        const { turma, cadastraTurma } = this.props

        return (

            <Main>
                <ContainerBox >
                    <h1 className="cadastro__title">Turma Nova</h1>
                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>

                        <Select
                            className="cadastro-turma__form-select"
                            name="ano"
                            onChange={this.handleChange}
                            required>
                            <option value="" disabled selected>Ano</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </Select>
                        <Select
                            className="cadastro-turma__form-select"
                            name="serie"
                            onChange={this.handleChange}
                            required>
                            <option value="" disabled selected>Ano escolar</option>
                            <option value="6º">6º</option>
                            <option value="7º">7º</option>
                            <option value="8º">8º</option>
                            <option value="9º">9º</option>
                        </Select>
                        <FormInput
                            className="cadastro-turma__form-select"
                            type="text"
                            name="descricao"
                            placeholder="Descrição (ex: Turma A) "
                            onChange={this.handleChange}
                            required />


                        <FormButton
                            className="cadastro-turma__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Continuar
                        </FormButton>

                    </Form>
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id // const id = 0
    const escola = state.escolas[id]

    return {
        escola
    }
}


const mapDispatchToProps = dispatch => ({
    cadastraTurma: (turma) => {
        dispatch(cadastraTurma(turma))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTurma))

// const mapStateToProps = state => ({
//     userType: state.userType
// })