import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';
import $ from 'jquery';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.loginData = this.loginData.bind(this);
      }

    componentDidMount(){
        $(document).ready(function(){
            $('.modal').modal();
          });
    }

    loginData(){
        console.log(this.email, this.password.value);
    }

    render() {
        return (
            <div style={{
                position: 'relative'
            }}>
                <Navbar />
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
                            marginTop: '80px'
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
                {/* Modal */}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4 style={ {textAlign: 'center'} }>Login</h4>
                                <div className="row">
                                    <div className="input-field col s12 m8 offset-m2">
                                        <input id="email" type="email" ref={el => this.email = el} className="validate" />
                                        <label htmlFor="email" data-error="wrong" data-success="">Email</label>
                                    </div>
                                    <div className="input-field col s12 m8 offset-m2">
                                        <input id="password" type="password" ref={el => this.password = el} className="validate" />
                                        <label htmlFor="password" data-error="wrong" data-success="">Password</label>
                                    </div>
                                </div>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-action modal-close btn waves-effect waves-green btn-flat">Clear</button>
                        <button className="modal-action modal-close btn waves-effect waves-green btn-flat" onClick={this.loginData}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;