import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import { connect } from 'dva';

import styles from './HomePage.less';

import { WingBlank, WhiteSpace, List, InputItem, Toast, Button } from 'antd-mobile';
//受控组件
import {createForm} from 'rc-form';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            //验证密码
            hasError: false
        }
    }
    UNSAFE_componentWillMount() {

        const { homePage } = this.props;
        document.title = homePage.title;
    }
    render() {
        const { dispatch } = this.props;
        const { getFieldProps } = this.props.form;
        return (
            <div styleName='hp'>
                <List renderHeader={() => 'Whether is controlled'}>
                    <InputItem
                    {...getFieldProps('name')}
                    placeholder="姓名"
                    clear
                    onBlur={() => {
                        console.log(getFieldProps('name').value);
                    }}
                    >受控组件:</InputItem>

                    <InputItem
                        {...getFieldProps('tel')}
                        placeholder="title can be icon，image or text"
                        type='phone'
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <InputItem
                        {...getFieldProps('price')}
                        placeholder="0.00"
                        extra="¥"
                    >价格</InputItem>

                    <InputItem
                        {...getFieldProps('money')}
                        type="money"
                        clear
                        placeholder="click to show number keyboard"
                    >数字键盘</InputItem>

                    <InputItem
                        type="password"
                        placeholder="input your phone"
                        error={this.state.hasError}
                        {...getFieldProps('pass')}
                        onErrorClick={() => {
                            Toast.info('输入密码长度有误');
                        }}
                        onBlur={() => {
                            const value = getFieldProps('pass').value;
                            if(!value) return;
                            value.replace(/\s/g, '');
                            if(value.length < 6 || value.length > 10) {
                                this.setState({
                                    hasError: true
                                });
                            }else {
                                this.setState({
                                    hasError: false
                                });
                            }
                        }}
                    >密码</InputItem>
                </List>
                        
                <WhiteSpace />

                <WingBlank>
                    <Button type='primary' loading onClick={() => {
                        const name = getFieldProps('name').value;
                        const tel = getFieldProps('tel').value;
                        const price = getFieldProps('price').value;
                        const money = getFieldProps('money').value;
                        const pass = getFieldProps('pass').value;

                        dispatch({
                            type: 'homePage/postFormData',
                            payload: {
                                name,
                                tel,
                                price,
                                money,
                                pass
                            }
                        })
                    }}>loading button</Button> 
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    ({homePage}) => ({homePage})
)(createForm()(CSSModules(HomePage, styles)));