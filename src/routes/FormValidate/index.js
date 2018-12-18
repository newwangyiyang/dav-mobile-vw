import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.less';
import { createForm } from 'rc-form';
import { InputItem, Button } from 'antd-mobile';

import ValidatorErrorMsg from '../../components/ValidatorErrorMsg/index';
class FormValidate extends Component {
    render() {
        const {getFieldProps, getFieldError} = this.props.form;
        return (
            <div styleName='FormValidate'>
                <InputItem
                    {...getFieldProps('name', {
                        initialValue: '321', //初始默认值
                        rules: [
                            {
                                required: true,
                                message: '姓名不能为空'
                            },
                            {
                                min: 2,
                                max: 5,
                                message: '请输入正确的姓名'
                            }
                        ]
                    })}
                    placeholder="姓名"
                    clear
                    onBlur={() => {
                        console.log(getFieldProps('name').value);
                    }}
                >姓名:</InputItem>
                <ValidatorErrorMsg>
                    <span>
                        {(getFieldError('name') || []).join(',')}
                    </span>
                </ValidatorErrorMsg>
                <InputItem
                    {...getFieldProps('tel', {
                        rules: [
                            {
                                required: true,
                                message: '手机号不能为空'
                            },
                            {
                                pattern: /^\d{11}$/, //正则校验
                                message: '请输入正确的手机号'
                            },
                            // {
                            //     type: 'number',
                            //     transform(v) {
                            //         if (v) {
                            //             return Number(v);
                            //         }
                            //     },
                            //     message: '只能输入数字'
                            // }
                            // {
                            //     type: 'enum',
                            //     enum: ['admin', 'boss'],
                            //     message: '输入字段不正确'
                            // }
                            // {
                            //     type: 'email',
                            //     message: '请输入正确格式的email'
                            // }
                        ]
                    })}
                    placeholder="手机号"
                    clear
                    onBlur={() => {
                        console.log(typeof getFieldProps('tel').value);
                    }}
                >手机号:</InputItem>
                <ValidatorErrorMsg>
                    <span>
                        {(getFieldError('tel') || []).join(',')}
                    </span>
                </ValidatorErrorMsg>
                <InputItem
                {...getFieldProps('myOwn', {
                    rules: [
                        {
                            required: true,
                            message: '自定义校验规则不能为空'
                        },
                        {
                            validator(rules, value, callback) {
                                if(value === '2') {
                                    callback()
                                }else {
                                    //当callback里面传入了错误信息即表示验证不通过，页面会展示错误信息
                                    callback('error');
                                }
                            },
                            message: '自定义校验规则'
                        }
                    ]
                })}
                placeholder="myOwn"
                clear
                onBlur={() => {
                    console.log(getFieldProps('myOwn').value);
                }}
            >自定义:</InputItem>
            <ValidatorErrorMsg>
                <span>
                    {(getFieldError('myOwn') || []).join(',')}
                </span>
            </ValidatorErrorMsg>
            <Button type="primary" onClick={() => {
                //验证当前组件是否全部通过参数校验
                // this.props.form.validateFields((error, value) => {

                // });
                //验证部分字段是否通过参数校验
                this.props.form.validateFields(['name'], {force: true}, (error, value) => {
                    if(!error) {
                        //表示参数校验通过
                    } else {
                        //表示参数校验不通过
                    }
                });
              }}>提交表单</Button>
            </div>
        );
    }
}

export default createForm()(CSSModules(FormValidate, styles));