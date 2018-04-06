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


const NavProf = ({ user, deslogaUser, page }) => (

    <nav className="navbar--logado">
        <input id="menu-burger" className="nav-menu-button--logado" type="checkbox" hidden />
        <label htmlFor="menu-burger" className="icon-menu--logado">
            <IconMenu />
        </label>
        {/* <div className={this.props.shouldHide ? 'hidden' : ''}> */}
            <ul className="nav-menu-list--logado">
                <li className="nav-menu-list__item--logado">
                    <h1 className="nav-menu-list__tipo-user">professor</h1>
                    {/* <h2 className="nav-menu-list__nome">{user.nome}</h2>
                <h2 className="nav-menu-list__sobrenome">{user.sobrenome}</h2> */}
                    <h2 className="nav-menu-list__nome">Nome</h2>
                    <h2 className="nav-menu-list__sobrenome">Sobrenome</h2>
                </li>

                <li className="nav-menu-list__item--logado">
                    <Link to='/desafios' className="nav-menu-list__link">
                        <FaTrophy className="navbar-pages-link-icon" />
                        desafios</Link>
                </li>
                <li className="nav-menu-list__item--logado">
                    <Link to='/home' className="nav-menu-list__link ">
                        <FaGroup className="navbar-pages-link-icon" />
                        escolas</Link>
                </li>
                {/* <li className="nav-menu-list__item--logado">
                <Link to='/' className="nav-menu-list__link">
                    <FaGroup className="navbar-pages-link-icon" />
                    turmas</Link>
            </li> */}
                <li className="nav-menu-list__item--logado">
                    <Link to='/perfil' className="nav-menu-list__link">
                        <FaUser className="navbar-pages-link-icon" />
                        meu perfil </Link>
                </li>
                <li className="nav-menu-list__item--logado">
                    <Link to='/' className="nav-menu-list__link">
                        <FaQuestionCircle className="navbar-pages-link-icon" />
                        ajuda </Link>
                </li>
                <li className="nav-menu-list__item--sair">
                    <Link to='/' className="nav-menu-list__link" onClick={deslogaUser}>
                        <IconSair className="navbar-pages-link-icon" />
                        Sair </Link>
                </li>
            </ul>
        {/* </div> */}

        <h1 className="navbar__title">{page}</h1>

    </nav>

)


const mapStateToProps = (state, props) => ({
    user: state.user,
    page: state.page
})

const mapDispatchToProps = dispatch => ({
    deslogaUser: () => {
        dispatch(deslogaUser())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavProf))
