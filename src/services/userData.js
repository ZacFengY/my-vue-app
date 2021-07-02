import request from 'utils/request'

/** 获取用户数据 */
export function getCurrentUser() {
  return request({
    url: '/getUser',
  })
}

/** 用户列表 */
export function getUserList() {
  return request({
    url: '/getUserList',
  })
}
