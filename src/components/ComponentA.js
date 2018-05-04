import React, {Component} from 'react';
import {connect} from 'react-redux';
import toastr from 'toastr';

class ComponentA extends Component {

    constructor(props) {
        super(props);
        this.logout = this
            .logout
            .bind(this);

        console.log('ComponentA', this.props)
        this
            .props
            .verify();
    }

    componentDidUpdate() {
        if (!this.props.result.auth || !this.props.result.token || this.props.result.status !== 'authorized') {
            this
                .props
                .history
                .replace('/');
        }
        console.log('componentDidUpdate', this.props);
    }

    logout() {
        sessionStorage.removeItem('main.token');
        this
            .props
            .history
            .replace('/');
        toastr.success('Logout Successful');
    }

    render() {
        return (
            <div style={{
                position: 'relative'
            }}>
                <div
                    className='logout'
                    style={{
                    float: 'right',
                    marginRight: '05px',
                    width: '100px',
                    textAlign: 'center',
                    backgroundColor: 'transparent'
                }}
                    onClick={this.logout}>
                    <li >
                        <a
                            className="waves-effect waves-light  waves-effect waves-light"
                            style={{
                            color: 'white'
                        }}>
                            <i className="material-icons right">directions</i>Logout</a>
                    </li>
                </div>
                <div className="imageloader responsive-img"></div>
                <div
                    className="container"
                    style={{
                    marginTop: '0px',
                    fontSize: '36px',
                    textAlign: 'center'
                }}>Welcome !</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {result: state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        verify: () => {
            dispatch({type: 'AUTH'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);