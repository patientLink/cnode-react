import React, { Fragment, createElement } from 'react'
import {Card, List, Comment, Avatar, Tooltip} from 'antd'
import {UserOutlined, LikeFilled} from '@ant-design/icons'
import Fromnow from '../../component/fromnow'
import {Link} from 'react-router-dom'
import TopicTag from '../../component/topicTag'

export default function Replies(props) {
  let {data, loading} = props;
  let {author} = data;
  let  topAuthor = author.loginname;
  return <Card
    title={`评论列表  ${(data.replies && data.replies.length) || 0} 回复`}
    loading={loading}
    type="inner"
  >
    <List 
      dataSource={data.replies && data.replies.map((reply, index) => {
        return {...reply, idx: index}
      })}
      renderItem={(item, index) => {
        let {author, content, create_at, ups, idx} = item;
        const actions = [
          <span key="comment-basic-like">
            {
              ups.length > 0 ? <Fragment>
                <Tooltip title="Like">
                  { createElement( LikeFilled, {})}
                </Tooltip>
                <span className="comment-action">{'  ' + ups.length}</span>
              </Fragment> : ''
            }
          </span>
        ];
        console.log(item)
        return <List.Item><Comment 
          author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
          avatar={
            <Link to={`/user/${author.loginname}`}>
              <Avatar 
                shape="square" 
                size={30} 
                alt={author.loginname} 
                src={author.avatar_url} 
                icon={<UserOutlined />}
              />
            </Link>
            }
            content={
              <div 
                dangerouslySetInnerHTML={{
                  __html: content
                }}>
              </div>
            }
          datetime={<Fragment>
              <span>{idx+1}楼 ● </span>
              <time><Fromnow date={create_at} /></time>
              {topAuthor === author.loginname ? <TopicTag tab="author" />: ''}
            </Fragment>}
          actions={actions}
        /></List.Item>
      }}
      pagination={{
        total: data.replies && data.replies.length,
        showSizeChanger: false
      }}
    />
  </Card>
}