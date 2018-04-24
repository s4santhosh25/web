import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';

class Layout extends Component {

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
                                    {/*<span className="card-title">Black Panther</span>*/}
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
                </div>
            </div>
        );
    }
}

export default Layout;