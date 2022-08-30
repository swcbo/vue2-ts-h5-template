import request from '@/utils/request'
export const checkCode = (open_id: string) =>
    request.post('subscriber/open_id_registered', {open_id})
export const getRotations = (type = 5) =>
    request.post('clap/inquire', {
        page: 1,
        details: true,
        status: 0,
        type,
        page_size: 10000,
    })
export const vote_statistics = () => request.post('clap/vote_statistics', {})
export const addPiao = (id: string) => request.post('clap/vote', {id})
