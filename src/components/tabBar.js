import React, { Component } from "react"
import { TabBar } from 'antd-mobile';

export default class TabBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'weixin',
      navBarList: [
        { title: "微信", key: "weixin", icon: { uri: require("./img/boss.png") }, activeIcon: { uri: require("./img/boss-active.png") } },
        { title: "职位", key: "job", icon: { uri: require("./img/job.png") }, activeIcon: { uri: require("./img/job-active.png") } },
        { title: "消息", key: "msg", num: 11, icon: { uri: require("./img/msg.png") }, activeIcon: { uri: require("./img/msg-active.png") } },
        { title: "我的", key: "user", icon: { uri: require("./img/user.png") }, activeIcon: { uri: require("./img/user-active.png") } }
      ]
    };
  }


  render() {
    return (
      <React.Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          {
            this.state.navBarList.map((item) => {
              return (<TabBar.Item
                title={item.title}
                key={item.key}
                icon={item.icon}
                badge={item.num}
                selectedIcon={item.activeIcon}
                selected={this.state.selectedTab === item.key}
                onPress={() => {
                  this.setState({
                    selectedTab: item.key,
                  });
                  console.log(this.props)
                }}
              />
              )
            })
          }
        </TabBar>
      </React.Fragment >
    );
  }
}
