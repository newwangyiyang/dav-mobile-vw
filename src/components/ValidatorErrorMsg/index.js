import React, { Component } from 'react';
import styles from './index.less';
import CSSModules from 'react-css-modules';

class ValidatorErrorMsg extends Component {
    render() {
        return (
            <div styleName='ValidatorErrorMsg'>
                {this.props.children}
            </div>
        )
    }
}

export default CSSModules(ValidatorErrorMsg, styles);