import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ShowPage.less';
import { connect } from 'dva';

class ShowPage extends Component {
    UNSAFE_componentWillMount() {
        const {showPage} = this.props;
        document.title = showPage.title;
    }
    render() {
        return (
            <div styleName='sp'>
                123
            </div>
        )
    }
}


export default connect(
    ({showPage}) => ({showPage})
)(CSSModules(ShowPage, styles));