import React from "react"
import { NavBar, Icon } from 'antd-mobile';
import "./header.css"
function NavBarComp(){
 return (
  <div>
  <NavBar
    mode="dark"
    // icon={<Icon type="left" />}
    // onLeftClick={() => console.log('onLeftClick')}
    rightContent={[
      <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      <Icon key="1" type="ellipsis" />,
    ]}
  >移动Web端</NavBar>
</div>
 )
}

export default NavBarComp