import React from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'
import imgMockup from './img/mock.png'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <React.Fragment>
                <header class="jumbotron bg-inverse text-xs-center center-vertically" role="banner">
                    <div class="home-container">
                        <h1 class="display-3">r.edu, a educação refeita.</h1>
                        <h2 class="m-b-3">Transforme sua experiência em sala de aula, <em>totalmente de graça</em>, para sempre.</h2>
                        <a class="btn btn-secondary-outline m-b-1" role="button">Cadastre-se agora</a>
                        <ul class="nav nav-inline social-share">
                            <li class="nav-item"><a class="nav-link" href="#"><span class="icon-twitter"></span> 1024</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><span class="icon-facebook"></span> 562</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><span class="icon-linkedin"></span> 356</a></li>
                        </ul>
                    </div>
                </header>

                <main>
                    {/* Intro */}

                    <section class="section-intro bg-faded text-xs-center">
                        <div class="home-container">
                            <h3 class="wp wp-1">Build your beautiful UI, the way you want it, with Land.io</h3>
                            <p class="lead wp wp-2">Craft memorable, emotive experiences with our range of beautiful UI elements.</p>
                            <img src={imgMockup} alt="iPad mock" class="img-fluid wp wp-3" />>
                        </div>
                    </section>

                    {/* Features */}

                    <section class="section-features text-xs-center">
                        <div class="home-container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-block">
                                            <span class="icon-pen display-1"></span>
                                            <h4 class="card-title">250</h4>
                                            <h6 class="card-subtitle text-muted">UI Elements</h6>
                                            <p class="card-text">Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per senectus eu parturient quam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-block">
                                            <span class="icon-thunderbolt display-1"></span>
                                            <h4 class="card-title">Ultra</h4>
                                            <h6 class="card-subtitle text-muted">Modern design</h6>
                                            <p class="card-text">Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per senectus eu parturient quam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card m-b-0">
                                        <div class="card-block">
                                            <span class="icon-heart display-1"></span>
                                            <h4 class="card-title">Free</h4>
                                            <h6 class="card-subtitle text-muted">Forever and ever</h6>
                                            <p class="card-text">Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per senectus eu parturient quam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="section-text">
                        <div class="home-container">
                            <h3 class="text-xs-center">Make your mark on the product industry</h3>
                            <div class="row p-y-3">
                                <div class="col-md-5">
                                    <p class="wp wp-7">A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.</p>
                                </div>
                                <div class="col-md-5 col-md-offset-2 separator-x">
                                    <p class="wp wp-8">A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer class="section-footer bg-inverse" role="contentinfo">
                        <div class="home-container">
                            <div class="row">
                                <div class="col-md-6 col-lg-5">
                                    <div class="media">
                                        <div class="media-left">
                                            <span class="media-object icon-logo display-1"></span>
                                        </div>
                                        <small class="media-body media-bottom">
                                            &copy; R.Edu 2018. <br />
                                                Designed by Danielle Nakatsu, developed by R.Edu Team.
                                        </small>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-7">
                                    <ul class="nav nav-inline">
                                        <li class="nav-item">
                                            <a class="nav-link" href="./index-carousel.html"><small>NEW</small> Slides<span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="ui-elements.html">UI Kit</a></li>
                                        <li class="nav-item"><a class="nav-link" href="https://github.com/tatygrassini/landio-html" target="_blank">GitHub</a></li>
                                        <li class="nav-item"><a class="nav-link scroll-top" href="#totop">Back to top <span class="icon-caret-up"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>

                </main>
            </React.Fragment>
        )
    }
}

export default LandingPage