import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import CSSModules from 'react-css-modules';

function IndexPage() {
  return (
    <div styleName='ip'>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quia assumenda minima ipsam reprehenderit dolorem nemo maiores fugiat aliquam quibusdam optio ea quos recusandae quidem fuga quam sit ipsum voluptatem.</div>
        <img src={require('../assets/yay.jpg')} alt=""/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(CSSModules(IndexPage, styles));
