import React, { Component } from 'react';

class RegisterModal extends Component {

render(){
    return(
      <div id="register" className="modal">
      <div className="modal-content">
          <h4 style={ {textAlign: 'center'} }>Register</h4>
                  <div className="row">
                      <div className="input-field col s12 m8 offset-m2">
                            <i className="material-icons prefix">person</i>
                          <input id="name" type="text" ref={el => this.name = el} />
                          <label htmlFor="name" data-error="wrong" data-success="right">Name</label>
                      </div>
                      <div className="input-field col s12 m8 offset-m2">
                            <i className="material-icons prefix">contact_mail</i>
                          <input id="registerEmail" type="email" ref={el => this.email = el} />
                          <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                      </div>
                      <div className="input-field col s12 m8 offset-m2">
                          <i className="material-icons prefix">lock</i>
                          <input id="registerPassword" type="password" ref={el => this.password = el}  />
                          <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
                      </div>
                  </div>
      </div>
      <div className="row">
          <button className="modal-action modal-close btn waves-effect teal lighten-2 waves-green btn-flat col s5 offset-s1">Clear</button>
          <button className="modal-action modal-close btn waves-effect teal lighten-2 waves-green btn-flat col s5" style={{marginLeft:'4px'}} onClick={this.props.submit}>Login</button>
     </div>
  </div>
    );
}

}

export default RegisterModal; 