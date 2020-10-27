import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return <div>
            MyComponent name is {name}. <br/>
            child : {children} <br/>
            조아하는 숫자 : {favoriteNumber}
            </div>;
    }
};

MyComponent.defaultProps = {
    name : '기본 이름'
  };

  MyComponent.propTypes = {
      name: PropTypes.string,
  }
  
export default MyComponent;