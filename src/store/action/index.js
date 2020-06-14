import axios from "axios"
import { useDispatch } from "react-redux";

const http = axios.create({
  baseURL: "https://cnodejs.org/api/v1"
})
// 获取主题列表
function useTopicsList() {
  let dispatch = useDispatch();
  return async function(tab="all", page=1, limit=20, mdrender=true) {
    dispatch({
      type: "topics_loading"
    })
    let res = await http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`);
    // console.log(res.data.data)
    dispatch({
      type: "topics_loadover",
      data: res.data.data
    })
    return res.data.data
  }
}

// 获取主题详情
function useTopic() {
  let dispatch = useDispatch();
  return async function(id, mdrender=true) {
    dispatch({
      type: "topic_loading"
    })
    let res = '', err = '';
    try {
      res = await http.get(`/topic/${id}`);
      res = res.data.data
      dispatch({
        type: "topic_loadover",
        data: res
      })
      return res
    } catch(e) {
      err = e.response.data.error_msg
      dispatch({
        type: "topic_error",
        err_msg: err
      })
      return err
    }
  }
}

// 获取用户详情
function useUser() {
  let dispatch = useDispatch();
  return async function(loginname) {
    dispatch({
      type: "user_loading"
    })
    let res = '', err = '';
    try {
      res = await http.get(`/user/${loginname}`);
      res = res.data.data
      console.log(res)
      dispatch({
        type: "user_loadover",
        data: res
      })
      return res
    } catch(e) {
      err = e.response.data.error_msg
      console.log(err)
      dispatch({
        type: "user_error",
        err_msg: err
      })
      return err
    }
  }
}

export {useTopicsList, useTopic, useUser}