import React from 'react'
import { Affix, Layout, Row, Col, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {nav} from '../router/index'
import icon_svg from '../static/image/cnodejs_light.svg'

function Header() {
  let {pathname} = useLocation();
  let activeIndex = nav.findIndex(item => item.to === pathname);
  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <div className="wrap">
          <Row>
            <Col 
              xs={24}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              >
              <h1 className="logo"><Link to="/" style={{display: 'block', verticalAlign: 'middle'}} ><img style={{width: 120, height: 'auto', verticalAlign: 'middle'}} src={icon_svg} alt="cnode" /></Link></h1>
            </Col>
            <Col 
              xs={24}
              sm={18}
              md={18}
              lg={18}
              xl={18}
              >
              <Menu 
                mode="horizontal" 
                theme="dark"
                defaultSelectedKeys={[activeIndex+""]}
                >
                {
                  nav.map((navItem,index) => {
                    return (
                      <Menu.Item key={index}>
                        <Link to={navItem.to} >{navItem.txt}</Link>
                      </Menu.Item>
                      )
                  })
                }
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  )
}
export default Header