import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ShowPage.less';
import { connect } from 'dva';

import { Toast, Button } from 'antd-mobile';

class ShowPage extends Component {
    UNSAFE_componentWillMount() {
        const {showPage} = this.props;
        document.title = showPage.title;
    }
    render() {
        return (
            <div styleName='sp'>
                <Button onClick={() => {
                    Toast.loading('loading...', 10);
                }}>点击</Button>
            </div>
        )
    }
}


export default connect(
    ({showPage}) => ({showPage})
)(CSSModules(ShowPage, styles));