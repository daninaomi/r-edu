import React from 'react'
import classnames from 'classnames'
import './select.css'


class Select extends React.Component {
    constructor(props) {
        super(props)
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        const value = event.target.value
        const name = event.target.name

        this.props.onChange(name, value, false)
    }

    render() {
        return (
            <React.Fragment>
                <select
                    {...this.props}
                    className={classnames("form-select", this.props.className)}
                    onChange={this.validate}>
                    {this.props.children}
                </select >

            </React.Fragment>

        )
    }
}

export default Select