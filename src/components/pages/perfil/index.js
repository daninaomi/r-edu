import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { alteraUser } from '../../../actions'
// import PerfilProf from './perfilProf'
import PerfilAluno from './perfilAluno'

class Perfil extends React.Component {
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
            // this.props.alteraUser(user)

            // this.props.history.push('/home')
        }
    }

    render() {

        // const { user, alteraUser, userType } = this.props

        return (
            // userType === 'professor' ? (
            //     <PerfilProf />
            // ) : (
            //     <PerfilAluno />
            // )
            <PerfilAluno />

        )
    }
}

export default Perfil

// const mapStateToProps = state => ({
//     userType: state.user.type
// })

// const mapDispatchToProps = dispatch => ({
//     alteraUser: (user) => {
//         dispatch(alteraUser(user))
//     }
// })

// withRouter(connect(mapDispatchToProps)(PerfilProf, PerfilAluno))


// export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)
