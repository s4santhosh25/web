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
                                    Ishtar
                                </b>
                            </div>
                            <div
                                className="col s12"
                                style={{
                                marginTop: '10px',
                                lineHeight: '2'
                            }}>
                                Literally venmo before they sold out, DIY heirloom forage polaroid offal yr
                                pop-up selfies health goth. Typewriter scenester hammock truffaut meditation,
                                squid before they sold out polaroid portland tousled taxidermy vice. Listicle
                                butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal
                                kinfolk you probably haven't heard of them portland small batch.
                            </div>
                        </div>
                        <div className="col m6 s12 secondbox">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">Black Panther</span>
                                    <img
                                        width="100%"
                                        src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/10/marvel_black_panther_concept_art.jpg"
                                        alt="Marvel Infinity War"/>
                                </div>
                                <div className="card-action">
                                    <div>
                                        <center>Ishtar</center>
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