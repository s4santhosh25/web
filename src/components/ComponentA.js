import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ComponentA extends Component {
    componentWillMount() {
        // this     .props     .verify();
        console.log('ComponentA', this.props)
    }
    render() {
        return (
            <div>A
                <Link to='/b'>Go to B</Link>
                <button onClick={this.props.verify}/>{this.props.result.status}
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