import React from 'react'
import { Card } from 'antd';
import { Fragment } from 'react';
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
    title={<Fragment>
      <h1>
        <TopicTag tab={top?"top":(good?"good":tab)}/>
        <span>{title}</span>
      </h1>
      <p>● 作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link> ● 创建时间：<FromNow date={create_at}/> ● 浏览人数：{visit_count || 0}
      </p>
    </Fragment>}
    type="inner"
  >
    <div 
      dangerouslySetInnerHTML={{
        __html: content
      }}>

    </div>
  </Card>
}