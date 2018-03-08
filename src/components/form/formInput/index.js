import React from 'react';
import classnames from 'classnames'
import './input.css'


class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        const value = event.target.value
        const name = event.target.name

        if (this.props.required && value.trim() === '') {
            this.setState({ error: 'Campo obrigatório' })
            this.props.onChange(name, value, true)
            return
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.props.type === 'email' && !regex.test(value)) {
            this.setState({ error: 'E-mail inválido' })
            this.props.onChange(name, value, true)
            return
        }

        if (this.props.type === 'password' && value.length < 6) {
            this.setState({ error: 'Senha inválida' })
            this.props.onChange(name, value, true)
            return
        }

        this.setState({ error: '' })
    }

    render() {
        return (
            <React.Fragment>
                <input {...this.props} 
                className={classnames( 'form-input' ,this.props.className, {
                    'form-input--error': this.state.error
                })}
                onChange={this.validate} />

                {this.state.error && 
                <p className="form-input__helper">
                {this.state.error}
                </p>}
            </React.Fragment>
        )
    }
}

export default FormInput

// cada tipo de input (email, password, etc) vai definir nas props

// const FormInput = props => (
//     <input className="form-input" {...props} />
// )