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
