import React from 'react'
import { Pagination } from 'antd'
import {Link, useLocation} from 'react-router-dom'
import qs from 'qs'

function IndexPagination() {
  let {search} = useLocation()
  let {tab="all", page=1} = qs.parse(search.slice(1))
  return <div className="topics-pagination">
    <Pagination 
      current={page-0}
      defaultPageSize={20}
      showSizeChanger={false}
      total={400}
      onChange={(nowpage) => {
        page = nowpage
      }}
      itemRender={(page1,type) => {
        switch(type) {
          case "page": 
            if(page === page1) {
              return <span>{page1}</span>
            }else{
              return <Link to={`/?tab=${tab}&page=${page1}`}>{page1}</Link>
            }
            
          case "prev":
            return <Link to={`/?tab=${tab}&page=${page1}`}>{"<"}</Link>
          case "next":
            return <Link to={`/?tab=${tab}&page=${page1}`}>{">"}</Link>
          default: 
            return <span>...</span>
        }
      }}
    />
  </div>
}

export default IndexPagination