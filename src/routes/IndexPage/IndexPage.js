import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './IndexPage.less';
import CSSModules from 'react-css-modules';

//可以通过Link标签进行导航
// import { Link } from 'dva/router';

import { WingBlank, WhiteSpace, NavBar, Icon,  SwipeAction, List, Button } from 'antd-mobile';

class IndexPage extends Component {
  UNSAFE_componentWillMount() {
    const { indexPage, dispatch } = this.props;
    document.title = indexPage.title;
    dispatch({
      type: 'indexPage/getList'
    });
  }
  render() {
    const { indexPage, dispatch, history } = this.props;

    return (
      <div styleName='ip'>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          leftContent="返回"
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
          onLeftClick={() => {
            console.log('点击返回按钮');
          }}
        >导航栏</NavBar>

        <WhiteSpace size='lg' />

        <List>
              {
                indexPage.list.map((v, i) => 
                      <SwipeAction
                          key={i}
                          style={{ backgroundColor: 'gray' }}
                          autoClose
                          right={[
                              {
                                  text: '删除该选项',
                                  onPress: () => (
                                      dispatch({type: 'indexPage/deleteListItem', payload: v.id})
                                  ),
                                  style: { backgroundColor: '#F4333C', color: 'white' },
                              },
                          ]}
                      >
                          <List.Item
                              arrow="horizontal"
                              multipleLine
                              onClick={() => { 
                                
                              }}
                              platform="android"
                          >
                              {v.name} 
                              <List.Item.Brief>{v.content}</List.Item.Brief>
                          </List.Item>
                      </SwipeAction>
                  )
              }
          </List>
        
        <WhiteSpace size='lg' />

        <WingBlank size='lg'> 
            <Button type="primary" onClick={() => {
              history.push('HomePage');
            }}>props.history.push('name')</Button>
        </WingBlank>

        <List renderHeader={() => '列表展示样式'}>
          <List.Item multipleLine extra="越努力，越幸福，是这个世界的真理" onClick={() => {
            history.push(`HomePage`)
          }}>
            Title <List.Item.Brief>subtitle</List.Item.Brief>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default connect(
  ({indexPage}) => ({indexPage})
)(CSSModules(IndexPage, styles));
