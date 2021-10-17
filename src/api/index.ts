import request from '@/utils/request'
export const checkCode = (code: string) =>
  request.post('user/authorization/', { code })
export const querystatistical = () =>
  request.post('vote_detail/query_statistical', {})
export const inquirelist = (data: any) =>
  request.post('list/inquire', data, { hiddenToast: true })
export const addPiao = (roll: string) =>
  request.post('vote_detail/add', { roll })
export const statistical = () => request.post('vote_detail/statistical', {})
