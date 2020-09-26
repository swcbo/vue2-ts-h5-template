/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-09-25 22:31:03
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-25 23:52:22
 */
import request from '@/utils/request';

export const checkCode = (code: string) => request.post('user/authorization/', { code });

export const query_statistical = () => request.post('vote_detail/query_statistical', {});
export const inquirelist = (data: any) => request.post('list/inquire', data);
export const addPiao = (roll: string) => request.post('vote_detail/add', { roll });
