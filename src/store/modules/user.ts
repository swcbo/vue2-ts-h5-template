/*
 * @Description: 用户store
 * @Author: 小白
 * @Date: 2019-11-22 09:30:15
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 22:15:04
 */
import store from '@/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
export interface ISearchState {
	search: string;
}


@Module({ dynamic: true, store, name: 'user', namespaced: true })
class Search extends VuexModule implements ISearchState {
	public search = '';
	@Mutation
	public SET_SEARCH(search: string) {
		this.search = search;
	}
	@Action({ commit: 'SET_SEARCH' })
	public setSearch(search: string) {
		return search;
	}
}

export const SearchModule = getModule(Search);
