import React, { Component } from "react"
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import connect from "@/utils/connect"
@connect
@withRouter
class TabBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'weixin',
      navBarList: [
        { title: "职位", key: "dashboard", icon: { uri: require("@/common/img/tabBar/boss.png") }, activeIcon: { uri: require("@/common/img/tabBar/boss-active.png") },path:"/dashboard" },
        { title: "公司", key: "compony", icon: { uri: require("@/common/img/tabBar/job.png") }, activeIcon: { uri: require("@/common/img/tabBar/job-active.png")} ,path:"/compony" },
        { title: "消息", key: "message",  icon: { uri: require("@/common/img/tabBar/msg.png") }, activeIcon: { uri: require("@/common/img/tabBar/msg-active.png")},path:"message"  },
        { title: "我的", key: "my", icon: { uri: require("@/common/img/tabBar/user.png") }, activeIcon: { uri: require("@/common/img/tabBar/user-active.png") },path:"my" }
      ],
      unreadNum:0
    };
  }

  componentDidMount() {
    this.props.getChatList().then(()=>{
      this.setState({
        unreadNum:this.props.state.chat.unread
      })
    })
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
                badge={item.key==="message"?this.state.unreadNum:item.num}
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
export default TabBarComp