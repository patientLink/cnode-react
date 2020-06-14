import React, { useEffect, Fragment } from 'react'
import {Card, Alert, Avatar} from 'antd'
import { useParams, useHistory } from 'react-router-dom'
import {useUser} from '../../store/action/index'
import { useSelector } from 'react-redux';
import TopicsList from '../../component/topicslist'
import {UserOutlined} from '@ant-design/icons'
import Fromnow from '../../component/fromnow'

function UserPage() {
  let {loginname} = useParams();
  let getData = useUser();
  let history = useHistory();
  let {data, loading, isError, err_msg} = useSelector(state => state.user)
  let {recent_topics=[], recent_replies, avatar_url, create_at, githubUsername, score} = data;
  useEffect(() => {
    getData(loginname)
  }, [loginname])
  return (
    isError ? <Alert 
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
  /> : 
    <div className="user_page">
      <Card 
        loading={loading}
        type="inner"
        className="user-details"
      >
        <Avatar 
          size={40}
          shape="square"
          alt={loginname} 
          src={avatar_url} 
          icon={<UserOutlined />}
        />
        <p style={{marginTop: 20}}>
          用户名：{loginname}  注册时间：<Fromnow date={create_at}/>  积分：{score}
        </p>
        <p>
        github: <a href={`https://github.com/${githubUsername}`} rel="noopener noreferrer" target="_blank">@{githubUsername}</a>
        </p>
      </Card>
      <Card 
        loading={loading}
        title="最近创建的话题"
        type="inner"
      > 
        <TopicsList 
          loading={loading}
          data={recent_topics}  
        />
      </Card>
      <Card 
        loading={loading}
        title="最近参与的话题"
        type="inner"
      >
        <TopicsList 
          loading={loading}
          data={recent_replies}  
        />
      </Card>
    </div>
  )
}

export default UserPage