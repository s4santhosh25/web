import React, {Component} from 'react';
import "./Spinner.css";
import { FadeLoader } from 'react-spinners';
 
class Spinner extends Component {

  render() {
    return (
      <div className='spinner'>
        <FadeLoader
          color={'#000000'} 
          loading={this.props.spinner} 
        />
      </div>
    )
  }
}

export default Spinner;