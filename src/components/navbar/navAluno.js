import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deslogaUser } from '../../actions'

import IconMenu from 'react-icons/lib/fa/bars'
import IconSair from 'react-icons/lib/fa/power-off'
import FaTrophy from 'react-icons/lib/fa/trophy'
import FaGroup from 'react-icons/lib/fa/group'
import FaUser from 'react-icons/lib/fa/user'
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'


import './navProfAluno.css'


const NavAluno = ({ user, deslogaUser }) => {

    function closeMenu() {
        document.getElementsByClassName("icon-menu--logado")[0].click()
    }

    return (

        <nav className="navbar--logado">
            <input id="menu-burger" className="nav-menu-button--logado" type="checkbox" hidden />
            <label htmlFor="menu-burger" className="icon-menu--logado">
                <IconMenu />
            </label>
            
            <ul className="nav-menu-list--logado">
                <li className="nav-menu-list__item--logado">
                    <h1 className="nav-menu-list__tipo-user">aluno</h1>
                    <h2 className="nav-menu-list__nome">{user.usuario.nome}</h2>
                    <h2 className="nav-menu-list__sobrenome">{user.usuario.sobrenome}</h2>
                </li>

                <li className="nav-menu-list__item--logado">
                    <Link to='/' className="nav-menu-list__link" onClick={() => { closeMenu() }}>
                        <FaTrophy className="navbar-pages-link-icon" />
                        desafios</Link>
                </li>
                <li className="nav-menu-list__item--logado">
                    <Link to='/perfil' className="nav-menu-list__link" onClick={() => { closeMenu() }}>
                        <FaUser className="navbar-pages-link-icon" />
                        meu perfil </Link>
                </li>
                <li className="nav-menu-list__item--logado">
                    <Link to='/' className="nav-menu-list__link" onClick={() => { closeMenu() }}>
                        <FaQuestionCircle className="navbar-pages-link-icon" />
                        ajuda </Link>
                </li>
                <li className="nav-menu-list__item--sair">
                    <Link to='/' className="nav-menu-list__link" onClick={deslogaUser}>
                        <IconSair className="navbar-pages-link-icon" />
                        Sair </Link>
                </li>
            </ul>
        </nav>
    )
}



const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    deslogaUser: () => {
        dispatch(deslogaUser())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavAluno))
