import React from 'react'
import {List, Col, Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import TopicTag from './topicTag'
import FromNow from './fromnow'

function TopicsList(props) {
  let {loading, data} = props;

  return (
    <List
      className="topics-list"
      loading={loading}
      dataSource={data}
      renderItem={data => {
        let {author, last_reply_at, id, good, top, tab, title, reply_count, visit_count} = data;
        return <List.Item className="topics-list-row">
          <Col 
            xs={24} 
            sm={24} 
            md={20} 
            className="topics-list-main-col"
            >
            <Link className="author_avatar" to={`/user/${author.loginname}`}>
              <Avatar 
                shape="square" 
                size={30} 
                alt={author.loginname} 
                src={author.avatar_url} 
                icon={<UserOutlined />}
                />
            </Link>
            { visit_count && <span className="topics-list-ratio">
              <span className="topics-list-ratio-reply">{reply_count}</span>/
              <span className="topics-list-ratio-visit">{visit_count}</span>
            </span>}
            
            {tab? <TopicTag 
              tab={top?"top": (good?"good":tab)} 
            /> : ''}
            <Link className="topics-list-title" to={`/topics/${id}`}>
              <span>{title}</span>
            </Link>
          </Col>
          <Col 
            className="topics-list-date"
            xs={0} 
            sm={0} 
            md={4}>
            <FromNow date={last_reply_at} />
          </Col>
        </List.Item>
      }}
    />
  )
}

export default TopicsList