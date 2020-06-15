import dayjs from 'dayjs'
import React from 'react'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

export default function FromNow(props) {
  let {date} = props;
  
  return dayjs(date).fromNow()
}