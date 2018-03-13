import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deslogaUser } from '../../actions'
import NavProf from './navProf'
import NavAluno from './navAluno'

import IconMenu from 'react-icons/lib/fa/bars'
import './navbar.css'
import logo from './logo-icon.png'


const Navbar = ({ user, deslogaUser }) => (

    <nav className="navbar">

        {!user.logado && (
            <React.Fragment>
                <Link to="/">
                    <img className="navbar__logo" src={logo} alt="logo" />
                </Link>

                <input id="menu-burger" className="nav-menu-button" type="checkbox" hidden />
                <label htmlFor="menu-burger" className="icon-menu">
                    <IconMenu />
                </label>
                <ul className="nav-menu nav-menu-list">
                    <li className="nav-menu-list__item">
                        <Link to='' className="nav-menu-list__link">Sobre</Link>
                    </li>
                    <li className="nav-menu-list__item">
                        <Link to='' className="nav-menu-list__link">Contato</Link>
                    </li>
                    <li className="nav-menu-list__item">
                        <Link to='/login' className="nav-menu-list__link">Entrar</Link>
                    </li>
                </ul>
            </React.Fragment>
        )}
        {user.logado && (

            // react router match url ou path

            user.type === 'professor' ? (
                <NavProf />
            ) : (
                <NavAluno />
            )


        )}
    </nav>
)

const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => (
    {
        deslogaUser: () => {
            dispatch(deslogaUser())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)