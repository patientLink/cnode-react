import React from 'react'
import { Card } from 'antd';
import TopicTag from '../../component/topicTag'
import { Link } from 'react-router-dom';
import FromNow from '../../component/fromnow'

export default function Detail(props) {
  let {data, loading} = props;
  console.log(data, loading)
  let {author, content, create_at, good, top, tab, title, visit_count} = data;
  return <Card 
    bordered
    loading={loading}
    headStyle={{maxWidth: '100%'}}
    title={<div className="topic-card-title">
      <h1>
        <TopicTag tab={top?"top":(good?"good":tab)}/>
        {title}
      </h1>
      <p>
        <span>● 作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link></span>
        <span> ● 创建时间：<FromNow date={create_at}/></span>
        <span> ● 浏览人数：{visit_count || 0}</span>  
      </p>
    </div>}
    type="inner"
  >
    <div className="topic-content"
      dangerouslySetInnerHTML={{
        __html: content
      }}>

    </div>
  </Card>
}