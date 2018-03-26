import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { selecionarUserType, cadastraUser } from '../../../actions'
import FormProf from './formprof'
import FormAluno from './formaluno'

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const user = {
                usuario: {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    senha: this.senha,
                    tipoUsuario: this.tipoUsuario
                },
                sexo: this.sexo,
                cidade: this.cidade,
                estado: this.estado,
                telefone: this.telefone,
                dataNascimento: this.dataNascimento,
                cpf: this.cpf,
                nomeResponsavel: this.nomeResponsavel,
                idEscola: this.idEscola
            }
            this.props.cadastraUser(user)

            this.props.history.push('/login')
        }
    }

    render() {

        const { user, cadastraUser, selecionarUserType } = this.props

        return (
            user.type === 'professor' ? (
                <FormProf />
            ) : (
                <FormAluno />
            )

        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    cadastraUser: (user) => {
        dispatch(cadastraUser(user))
    }
})


export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Cadastro))
