import React from 'react'
import {Tag} from 'antd'

function setTag(tab) {
  switch(tab) {
    case "top": 
      return <Tag className="topic-tag" color="#87d068">置顶</Tag>
    case "good":
      return <Tag className="topic-tag" color="gold">精华</Tag>
    case "share":
      return <Tag className="topic-tag" color="green">分享</Tag>
    case "ask":
      return <Tag className="topic-tag" color="orange">问答</Tag>
    case "job":
      return <Tag className="topic-tag" color="blue">招聘</Tag>
    case "dev":
      return <Tag className="topic-tag" color="purple">测试</Tag>
    case "author": 
      return <Tag className="author-tag" color="#87d068">作者</Tag>  
    default:
      return null
  }
  
}

function TopicTag(props) {
  let {tab} = props;
  return setTag(tab)
}

export default TopicTag