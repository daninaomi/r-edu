import React from 'react';
import classnames from 'classnames'
import MaskedInput from 'react-maskedinput'
import './inputMask.css'

class FormInputMask extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }
        this.validate = this.validate.bind(this)
        this.setError = this.setError.bind(this)
    }

    setError(error) {
        this.setState({ error })
    }

    validate(event) {
        const value = event.target.value
        const name = event.target.name




        if (this.props.required && value.trim() === '') {
            this.setState({ error: 'Campo obrigatório' })
            this.props.onChange(name, value, true, this.setError)
            return
        }


        if (this.props.name === 'cpf' && value.length < 12) {
            this.setState({ error: 'CPF inválido' })
            console.log(this.setError)
            this.props.onChange(name, value, true, this.setError)

            return
        }

        if (this.props.name === 'dataNascimento' && value.length < 10) {
           
            this.setState({ error: 'Campo Incompleto' })
            console.log(this.setError)
            this.props.onChange(name, value, true, this.setError)

            return
        }






        //  debugger


        this.setState({ error: '' })

        this.props.onChange(name, value, false, this.setError)
    }

    render() {
        return (
            <React.Fragment>
                <MaskedInput {...this.props}
                    className={classnames('form-input-mask', this.props.className, {
                        'form-input-mask--error': this.state.error
                    })}
                    onChange={this.validate} />

                {/* {this.state.error &&
                    <p className="form-input-mask__helper">
                        {this.state.error}
                    </p>} */}
            </React.Fragment>
        )
    }
}

export default FormInputMask

