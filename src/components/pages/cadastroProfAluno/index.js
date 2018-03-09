import React from 'react'
import FormProf from './formprof'
import FormAluno from './formaluno'
import { selecionarUserType, cadastraUser } from '../../../actions'


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
                apelido: this.apelido,
                nome: this.nome,
                sobrenome: this.sobrenome,
                sexo: this.sexo,
                email: this.email,
                senha: this.senha,
                cidade: this.cidade,
                estado: this.estado,
                telefone: this.telefone,
                dataNascimento: this.dataNascimento,
                cpf: this.cpf,
                nomeResponsavel: this.nomeResponsavel,
                escola: this.escola
            }
            this.props.cadastraUser(event, user)

            // this.props.history.push('/login')
        }
    }

    render() {

        const { user, cadastraUser } = this.props

        return (
            userType === 'Professor' ? (
                <FormProf />
            ) : (
                <FormAluno />
            )
            
        )
    }
}

const mapStateToProps = state => ({
    userType: state.userType
})

const mapDispatchToProps = dispatch => ({
    cadastraUser: (user) => {
        dispatch(cadastraUser(user))
    }
})

withRouter(connect(mapDispatchToProps)(FormButton))


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)
