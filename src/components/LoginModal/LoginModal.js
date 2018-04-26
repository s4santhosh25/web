import React, { Component } from 'react';

class LoginModal extends Component {

render(){
    return(
      <div id="login" className="modal">
      <div className="modal-content">
          <h4 style={ {textAlign: 'center'} }>Login</h4>
                  <div className="row">
                      <div className="input-field col s12 m8 offset-m2">
                            <i className="material-icons prefix">drafts</i>
                          <input id="email" type="email" ref={el => this.email = el} onChange={this.loginValidation} />
                          <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                      </div>
                      <div className="input-field col s12 m8 offset-m2">
                          <i className="material-icons prefix">lock</i>
                          <input id="password" type="password" ref={el => this.password = el} onChange={this.loginValidation} />
                          <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
                      </div>
                  </div>
      </div>
      <div className="row">
          <button className="modal-action modal-close btn waves-effect teal lighten-2 waves-green btn-flat col s5 offset-s1">Clear</button>
          <button className="modal-action modal-close btn waves-effect teal lighten-2 waves-green btn-flat col s5" style={{marginLeft:'4px'}} onClick={this.props.loginSubmit}>Login</button>
     </div>
      <div className="row" style={{ marginTop: '20px'}}>
              <span className="blue-text text-darken-2 col s6" style={{textAlign:'center'}}>Register Now?</span>
              <span className="blue-text text-darken-2 col s6" style={{textAlign:'center'}}>Forgot Password?</span>
      </div>
  </div>
    );
}

}

export default LoginModal; 