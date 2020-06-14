import React from 'react'
import { Menu } from 'antd'
import { indexNav, types } from '../../router/index'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'

function IndexNav() {
  let {search} = useLocation();
  let {tab} = qs.parse(search.substr(1));
  let activeIndex = tab===undefined?0:(types.indexOf(tab));
  console.log(activeIndex)
  return (
    <Menu 
      mode="horizontal"
      className="header_menu"
      selectedKeys={[activeIndex+'']}
      >
      {
        indexNav.map((item, index) => {
          return (
          <Menu.Item key={index}><Link to={item.to}>{item.txt}</Link></Menu.Item>
          )
        })
      }
    </Menu>
  )
}

export default IndexNav