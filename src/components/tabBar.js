import React, { Component } from "react"
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom"

class TabBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'weixin',
      navBarList: [
        { title: "职位", key: "dashboard", icon: { uri: require("./img/boss.png") }, activeIcon: { uri: require("./img/boss-active.png") },path:"/dashboard" },
        { title: "公司", key: "compony", icon: { uri: require("./img/job.png") }, activeIcon: { uri: require("./img/job-active.png")} ,path:"/compony" },
        { title: "消息", key: "message", num: 11, icon: { uri: require("./img/msg.png") }, activeIcon: { uri: require("./img/msg-active.png")},path:"message"  },
        { title: "我的", key: "my", icon: { uri: require("./img/user.png") }, activeIcon: { uri: require("./img/user-active.png") },path:"my" }
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
                selected={this.props.location.pathname === `/${item.key}`}
                onPress={() => {
                  this.setState({
                    selectedTab: item.key,
                  });
                  this.props.history.push(item.path)
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
export default withRouter(TabBarComp)