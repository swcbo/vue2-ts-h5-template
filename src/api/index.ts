import request from '@/utils/request'
export const checkCode = (code: string) =>
  request.post('applet_user/registered/', { code })
export const querystatistical = () =>
  request.post('vote_detail/query_statistical', {})
export const inquirelist = (data: any) =>
  request.post('works/inquire', data, { hiddenToast: true })
export const addPiao = (id: string) => request.post('works/vote', { id })
export const voteDetail = (id: string) => request.post('works/details', { id })
export const statistical = () => request.post('vote_detail/statistical', {})
