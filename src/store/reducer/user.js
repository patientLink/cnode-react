export default function user(user={
  loading: true,
  data: {
    author: {}
  },
  isError: false,
  err_msg: ""
}, action) {
  switch(action.type) {
    case "user_loading": 
      return {
        loading: true,
        data: {
          author: {}
        },
        isError: false,
        err_msg: ""
      }
    case "user_loadover": 
      return {
        loading: false,
        data: action.data,
        isError: false,
        err_msg: ""
      }
    case "user_error": 
      return {
        loading: false,
        data: {
          author: {}
        },
        isError: true,
        err_msg: action.err_msg
      }  
    default:
      return user
  }
  
}