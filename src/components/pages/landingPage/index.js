import React from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'

import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaConnectdevelop from 'react-icons/lib/fa/connectdevelop'
import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'

import logo from './img/logo.png'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <React.Fragment>
                <header className="hero" role="banner">
                    <div className="home-container">
                        <img src={logo} className="home-logo" alt="logo"/>
                        <h1 className="title">r.edu, a educação refeita.</h1>
                        <h2 className="subtitle">
                            Transforme sua experiência em sala de aula, <em>totalmente de graça</em>, para sempre.
                        </h2>
                        <button className="button">
                            <Link to='/cadastro' className="button-link">Cadastre-se agora</Link></button>
                        <ul className="hero__links">
                            <li className="hero__links-item"><FaTwitter className="social-share" /> 970</li>
                            <li className="hero__links-item"><FaFacebook className="social-share" /> 1.277</li>
                            <li className="hero__links-item"><FaLinkedin className="social-share" /> 406</li>
                        </ul>
                    </div>
                </header>

                <main>
                    {/* Intro */}

                    <section className="section-intro">
                        <div className="home-container">
                            <h3 className="title section-intro__title">Desenvolva projetos divertidos, com conteúdos complexos!</h3>
                            <p className="text">
                                R.edu é uma multiplataforma de projetos interdisciplinares, para o aluno sentir seu aprendizado aplicado no mundo real.
                            </p>
                        </div>
                    </section>

                    {/* Features */}

                    <section className="section-features">
                        <div className="home-container section-features__container">
                            <div className="card">
                                <FaConnectdevelop className="feature-icon" />
                                <h4 className="title card-title">Inter</h4>
                                <h6 className="subtitle card-subtitle">disciplinaridade</h6>
                                <p className="text card-text">
                                    Porque, na prática, nenhuma matéria é isolada da outra.
                                            </p>
                            </div>
                            <div className="card">
                                <FaGroup className="feature-icon" />
                                <h4 className="title card-title">Inte</h4>
                                <h6 className="subtitle card-subtitle">gração</h6>
                                <p className="text card-text">
                                    Entre alunos, alunos e professores, e entre professores.
                                            </p>
                            </div>
                            <div className="card">
                                <FaGamepad className="feature-icon" />
                                <h4 className="title card-title">Lúdico</h4>
                                <h6 className="subtitle card-subtitle">e gamificado</h6>
                                <p className="text card-text">
                                    Aplique nossa ferramenta IoT em sala de aula e promova debates críticos em formato de jogo.
                                            </p>
                            </div>
                        </div>
                    </section >

                    <section className="section-text">
                        <div className="home-container">
                            <h3 className="title section-text__title">Reescreva sua própria forma de aprender e ensinar</h3>
                            <div className="section-text__block">
                                <p className="text section-text__text">A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.</p>

                                <p className="text section-text__text">A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.</p>

                            </div>
                        </div>
                    </section>
                </main >

                <footer className="section-footer">
                    <div className="home-container section-footer__container">
                        <img src={logo} className="home-logo" />
                        <h5 className="footer-credits">
                            &copy; R.Edu 2018. <br />
                            Designed by Danielle Nakatsu, developed by R.Edu Team.
                        </h5>

                    </div>
                </footer>
            </React.Fragment >
        )
    }
}

export default LandingPage