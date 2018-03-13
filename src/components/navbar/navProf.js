import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deslogaUser } from '../../actions'

import IconMenu from 'react-icons/lib/fa/bars'
import IconSair from 'react-icons/lib/fa/power-off'

import './navProfAluno.css'


const NavProf = ({ user, deslogaUser }) => (

    <React.Fragment>
        <input id="menu-burger" className="nav-menu-button nav-menu-button--logado" type="checkbox" hidden />
        <label htmlFor="menu-burger" className="icon-menu">
            <IconMenu />
        </label>
        <ul className="nav-menu-list nav-menu-list--logado">
            <li className="nav-menu-list__item">
                <h1 className="">professor</h1>
                <h2 className="">{user.nome}</h2>
                <h2 className="">{user.sobrenome}</h2>
            </li>

            <li className="nav-menu-list__item">
                <Link to='/' className="nav-menu-list__link">desafios</Link>
            </li>
            <li className="nav-menu-list__item">
                <Link to='/' className="nav-menu-list__link">turmas</Link>
            </li>
            <li className="nav-menu-list__item">
                <Link to='/perfil' className="nav-menu-list__link">meu perfil</Link>
            </li>
            <li className="nav-menu-list__item">
                <Link to='/' className="nav-menu-list__link">ajuda</Link>
            </li>
            <li className="nav-menu-list__item">
                <Link to='../pages/login' className="nav-menu-list__link nav-menu-list__item--sair" onClick={deslogaUser}>
                    <IconSair className="navbar-pages-link-icon" /> Sair
                            </Link>
            </li>
        </ul>
    </React.Fragment>
)
    

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    deslogaUser: () => {
        dispatch(deslogaUser())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavProf))
