import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { deslogaUser } from '../../actions'
import IconMenu from 'react-icons/lib/fa/bars'
import IconSair from 'react-icons/lib/fa/power-off'
import './navbar.css'
import logo from './logo-icon.png'

const Navbar = ({ user, deslogaUser }) => (
    <nav className="navbar">
        <Link to="/">
            <img className="navbar__logo" src={logo} alt="logo" />
        </Link>

        {/* {!user && ( */}
            <React.Fragment>
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
                        <Link to='../pages/login' className="nav-menu-list__link">Entrar</Link>
                    </li>
                </ul>
            </React.Fragment>
        {/* )}
        {user && (

            <li className="nav-menu-list__item">
                <a className="nav-menu-list__link nav-menu-list__item--sair" onClick={deslogaUser}>
                    <IconSair className="navbar-pages-link-icon" /> Sair
                    </a>
            </li>
        )} */}
    </nav>
)

const mapStateToProps = state => (
    {
        user: state.user
    }
)

const mapDispatchToProps = dispatch => (
    {
        deslogaUser: () => {
            dispatch(deslogaUser())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)