import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';

class Layout extends Component {

    render() {
      return (
            <div>
                <Navbar />
                <div className='container'>
                <div class="col s12 m2 box">
                    <div class="z-depth-5">
                        <form> 
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="text" type="text" class="validate" />
                                    <label for="text"  data-error="wrong" data-success="right">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
      );
    }
  }
  
  export default Layout;