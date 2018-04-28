import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';
import $ from 'jquery';
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import axios from 'axios';
import {ApiUrl} from '../../config';
class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginEmailClass: '',
            loginPasswordClass: '',
            loginStatus: {
                loginEmailSuccess: '',
                loginEmailError: '',
                loginPasswordSuccess: '',
                loginPasswordError: ''
            },
            registerNameClass: '',
            registerEmailClass: '',
            registerPasswordClass: '',
            registerStatus: {
                registerNameSuccess: '',
                registerNameError: '',
                registerEmailSuccess: '',
                registerEmailError: '',
                registerPasswordSuccess: '',
                registerPasswordError: ''
            },
            loginEmail: false,
            loginPassword: false,
            registerName: false,
            registerEmail: false,
            registerPassword: false
        };

        this.loginSubmit = this
            .loginSubmit
            .bind(this);
        this.loginValidation = this
            .loginValidation
            .bind(this);
        this.loginCancel = this
            .loginCancel
            .bind(this);

        this.registerSubmit = this
            .registerSubmit
            .bind(this);
        this.registerValidation = this
            .registerValidation
            .bind(this);
        this.registerCancel = this
            .registerCancel
            .bind(this);
    }

    componentDidMount() {
        $(document)
            .ready(function () {
                $('.modal').modal();
            });
    }

    loginValidation(e) {
        switch (e.target.name) {
            case 'loginName':
                if (this.refs.loginModal.email.value === '') {
                    this.setState({
                        loginEmailClass: 'invalid',
                        loginStatus: {
                            loginEmailSuccess: '',
                            loginEmailError: 'Email cannot be empty'
                        },
                        loginEmail: false
                    });
                } else if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(this.refs.loginModal.email.value)) {
                    this.setState({
                        loginEmailClass: 'invalid',
                        loginStatus: {
                            loginEmailSuccess: '',
                            loginEmailError: 'Enter Correct Email format'
                        },
                        loginEmail: false
                    });
                } else if (this.refs.loginModal.email.value !== '') {
                    this.setState({
                        loginEmailClass: 'valid',
                        loginStatus: {
                            loginEmailSuccess: '',
                            loginEmailError: ''
                        },
                        loginEmail: true
                    });
                }
                return;

            case 'loginPassword':
                if (this.refs.loginModal.password.value === '') {
                    this.setState({
                        loginPasswordClass: 'invalid',
                        loginStatus: {
                            loginPasswordSuccess: '',
                            loginPasswordError: 'Password cannot be empty'
                        },
                        loginPassword: false
                    });
                } else if (this.refs.loginModal.password.value !== '') {
                    this.setState({
                        loginPasswordClass: 'valid',
                        loginStatus: {
                            loginPasswordSuccess: '',
                            loginPasswordError: ''
                        },
                        loginPassword: true
                    });
                }
                return;
            default:
                this.setState({loginEmail: false, loginPassword: false});
                return;
        }
    }

    loginSubmit() {
        this.loginData = {
            email: this.refs.loginModal.email.value,
            password: this.refs.loginModal.password.value
        };

        if (this.state.loginEmail && this.state.loginPassword) {
            console.log("Submitted", this.loginData);
            axios({
                method: 'post',
                url: ApiUrl + '/api/login',
                data: this.loginData
            }).then((res) => {
                console.log(this.props);
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    loginCancel() {
        this.refs.loginModal.email.value = '';
        this.refs.loginModal.password.value = '';
        this.setState({
            loginEmailClass: '',
            loginPasswordClass: '',
            loginStatus: {
                loginEmailSuccess: '',
                loginEmailError: '',
                loginPasswordSuccess: '',
                loginPasswordError: ''
            },
            loginSubmit: false
        });
    }

    registerValidation(e) {
        switch (e.target.name) {
            case 'registerName':
                if (this.refs.registerModal.registerName.value === '') {
                    this.setState({
                        registerNameClass: 'invalid',
                        registerStatus: {
                            registerNameSuccess: '',
                            registerNameError: 'Name cannot be empty'
                        },
                        registerName: false
                    });
                } else if (this.refs.registerModal.registerName.value !== '') {
                    this.setState({
                        registerNameClass: 'valid',
                        registerStatus: {
                            registerNameSuccess: '',
                            registerNameError: ''
                        },
                        registerName: true
                    });
                }
                return;

            case 'registerEmail':
                if (this.refs.registerModal.registerEmail.value === '') {
                    this.setState({
                        registerEmailClass: 'invalid',
                        registerStatus: {
                            registerEmailSuccess: '',
                            registerEmailError: 'Email cannot be empty'
                        },
                        registerEmail: false
                    });
                    console.log(this.state);
                } else if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(this.refs.registerModal.registerEmail.value)) {
                    this.setState({
                        registerEmailClass: 'invalid',
                        registerStatus: {
                            registerEmailSuccess: '',
                            registerEmailError: 'Enter correct Email format'
                        },
                        registerEmail: false
                    });
                } else if (this.refs.registerModal.registerEmail.value !== '') {
                    this.setState({
                        registerEmailClass: 'valid',
                        registerStatus: {
                            registerEmailSuccess: '',
                            registerEmailError: ''
                        },
                        registerEmail: true
                    });
                }
                return;

            case "registerPassword":
                if (this.refs.registerModal.registerPassword.value === '') {
                    this.setState({
                        registerPasswordClass: 'invalid',
                        registerStatus: {
                            registerPasswordSuccess: '',
                            registerPasswordError: 'Password cannot be empty'
                        },
                        registerPassword: false
                    });
                } else if (this.refs.registerModal.registerPassword.value.length < 6) {
                    this.setState({
                        registerPasswordClass: 'invalid',
                        registerStatus: {
                            registerPasswordSuccess: '',
                            registerPasswordError: 'Password cannot be less than 6'
                        },
                        registerPassword: false
                    });
                } else if (this.refs.registerModal.registerPassword.value !== '') {
                    this.setState({
                        registerPasswordClass: 'valid',
                        registerStatus: {
                            registerPasswordSuccess: '',
                            registerPasswordError: ''
                        },
                        registerPassword: true
                    });
                }
                return;
            default:
                this.setState({registerName: false, registerEmail: false, registerPassword: false});
                return;
        }
    }

    registerSubmit() {
        this.registerData = {
            name: this.refs.registerModal.registerName.value,
            email: this.refs.registerModal.registerEmail.value,
            password: this.refs.registerModal.registerPassword.value
        };

        if (this.state.registerName || this.state.registerEmail || this.state.registerPassword) {
            console.log("Submitted", this.registerData);
            axios({
                method: 'post',
                url: ApiUrl + '/api/register',
                data: this.registerData
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    registerCancel() {
        this.refs.registerModal.registerName.value = '';
        this.refs.registerModal.registerEmail.value = '';
        this.refs.registerModal.registerPassword.value = '';
        this.setState({
            registerNameClass: '',
            registerEmailClass: '',
            registerPasswordClass: '',
            registerStatus: {
                registerNameSuccess: '',
                registerNameError: '',
                registerEmailSuccess: '',
                registerEmailError: '',
                registerPasswordSuccess: '',
                registerPasswordError: ''
            },
            registerSubmit: false
        });
    }

    render() {
        return (
            <div style={{
                position: 'relative'
            }}>
                <Navbar/>
                <div className="imageloader responsive-img"></div>
                <div
                    className="container"
                    style={{
                    marginTop: '0px'
                }}>
                    <div className="row">
                        <div
                            className="col m6 s12 firstbox"
                            style={{
                            marginTop: '80px'
                        }}>
                            <div className="col s12">
                                <b
                                    style={{
                                    fontSize: '20px'
                                }}>
                                    Black Panther
                                </b>
                            </div>
                            <div
                                className="col s12"
                                style={{
                                marginTop: '10px',
                                lineHeight: '2'
                            }}>
                                Black Panther is a 2018 American superhero film based on the Marvel Comics
                                character of the same name. Produced by Marvel Studios and distributed by Walt
                                Disney Studios Motion Pictures, it is the eighteenth film in the Marvel
                                Cinematic Universe (MCU). The film is directed by Ryan Coogler, who co-wrote the
                                screenplay with Joe Robert Cole, and stars Chadwick Boseman as T'Challa / Black
                                Panther.
                            </div>
                        </div>
                        <div className="col m6 s12 secondbox">
                            <div className="card">
                                <div className="card-content">
                                    <img
                                        width="100%"
                                        src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/10/marvel_black_panther_concept_art.jpg"
                                        alt="Marvel Infinity War"/>
                                </div>
                                <div className="card-action">
                                    <div>
                                        <center>
                                            <b>Black Panther</b>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col m6 s12 thirdbox"
                            style={{
                            display: 'flex'
                        }}>
                            <div className="card">
                                <div className="card-content">
                                    <img
                                        width="100%"
                                        src="http://www.hdfondos.eu/pictures/2014/0315/1/iron-man-black-background-679307.jpg"
                                        alt="Marvel Infinity War"/>
                                </div>
                                <div className="card-action">
                                    <div>
                                        <center>
                                            <b>Iron Man</b>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col m6 s12 fourthbox"
                            style={{
                            marginTop: '50px'
                        }}>
                            <div className="col s12">
                                <b
                                    style={{
                                    fontSize: '20px'
                                }}>
                                    Iron Man
                                </b>
                            </div>
                            <div
                                className="col s12"
                                style={{
                                marginTop: '10px',
                                lineHeight: '2'
                            }}>
                                Iron Man is a 2008 American superhero film based on the Marvel Comics character
                                of the same name, produced by Marvel Studios and distributed by Paramount
                                Pictures.[N 1] It is the first film in the Marvel Cinematic Universe (MCU). The
                                film was directed by Jon Favreau, with a screenplay by the writing teams of Mark
                                Fergus and Hawk Ostby and Art Marcum and Matt Holloway.
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal
                    ref="loginModal"
                    loginEmail={this.state.loginEmail}
                    loginPassword={this.state.loginPassword}
                    loginEmailClass={this.state.loginEmailClass}
                    loginStatus={this.state.loginStatus}
                    loginPasswordClass={this.state.loginPasswordClass}
                    loginValidation={this.loginValidation}
                    loginSubmit={this.loginSubmit}
                    loginCancel={this.loginCancel}/>
                <RegisterModal
                    ref="registerModal"
                    registerName={this.state.registerName}
                    registerEmail={this.state.registerEmail}
                    registerPassword={this.state.registerPassword}
                    registerEmailClass={this.state.registerEmailClass}
                    registerStatus={this.state.registerStatus}
                    registerPasswordClass={this.state.registerPasswordClass}
                    registerValidation={this.registerValidation}
                    registerNameClass={this.state.registerNameClass}
                    registerSubmit={this.registerSubmit}
                    registerCancel={this.registerCancel}/>
            </div>
        );
    }
}

export default Layout;