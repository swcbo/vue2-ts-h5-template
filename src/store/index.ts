/*
 * @Description: store
 * @Author: 小白
 * @Date: 2019-11-22 09:24:57
 * @LastEditors: 小白
 * @LastEditTime: 2020-03-17 09:34:24
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { ISearchState } from './modules/user'
Vue.use(Vuex)

export interface IRootState {
    search: ISearchState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})