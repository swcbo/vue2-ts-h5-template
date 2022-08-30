import request from '@/utils/request'
export const checkCode = (code: string) => request.post('subscriber/code_exchange_open_id', {code})
export const getRotations = (type = 5) =>
    request.post('clap/inquire', {
        page: 1,
        details: true,
        status: 0,
        type,
        page_size: 10000,
    })
export const vote_statistics = () => request.post('clap/vote_statistics', {})
export const addPiao = (provisional_vote_id: string) =>
    request.post('provisional_vote/add', {provisional_vote_id})
