import React from "react"
import { NavBar, Icon } from 'antd-mobile';

export default function NavBarComp(){
 return (
  <div>
  <NavBar
    mode="light"
    icon={<Icon type="left" />}
    onLeftClick={() => console.log('onLeftClick')}
    rightContent={[
      <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      <Icon key="1" type="ellipsis" />,
    ]}
  >微信(431)</NavBar>
</div>
 )
}