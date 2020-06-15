import React from 'react'
import { useSelector } from 'react-redux'
import { useTopic } from '../../store/action/index'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Alert } from 'antd'
import { Fragment } from 'react';
import Detail from './detail'
import Replies from './replies';

function TopicPage() {
  let {id} = useParams()
  let history = useHistory()
  let getData = useTopic();
  let {data,loading,isError, err_msg} = useSelector(state=>state.topic)
  useEffect(() => {
    getData(id)
  },[id])
  return (
    <div id="topic">
      {
        isError ? 
        <Alert 
          closable
          message="请求出错"
          description={
            <Fragment>
              <p>{err_msg}</p>
              <p>点击关闭按钮返回上一步</p>
            </Fragment>
          } 
          type="error"
          onClose={() => {
            history.go(-1)
          }}
        /> : (<Fragment>
              <Detail 
                data={data} 
                loading={loading}
              />
              <Replies 
                data={data}
                loading={loading}
              />
        </Fragment>)
              
      }
    </div>
  )
}

export default TopicPage