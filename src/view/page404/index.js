import React, {Fragment} from 'react'
import {useHistroy, useHistory} from 'react-router-dom'
import {Alert} from 'antd'
function Page404() {
  let history = useHistory()
  return (
    <div>
      <Alert 
          closable
          message="请求出错"
          description={
            <Fragment>
              <p>抱歉，你所访问的页面飞走了~</p>
              <p>点击关闭按钮返回上一步</p>
            </Fragment>
          } 
          type="error"
          onClose={() => {
            history.go(-1)
          }}
        />
    </div>
  )
}

export default Page404