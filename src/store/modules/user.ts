/*
 * @Description: 用户store
 * @Author: 小白
 * @Date: 2019-11-22 09:30:15
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-26 13:25:14
 */
import store from '@/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { getAuth, setAuth } from '@/utils/utils';
import router from '@/router';

export interface IUserState {
	token: string;
}
export interface LoginInterFace {
	name: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
	public token = getAuth() || 'token默认案例';
	@Mutation
	public SET_TOKEN(token: string) {
		this.token = token;
	}
	@Action({ commit: 'SET_TOKEN' })
	public setToken(token: string) {
		return token;
	}

	@Action({ rawError: true })
	public async Login(userInfo: LoginInterFace) {
		// try {
		//     const { data } = await login(userInfo)
		//     setAuth(data.token)
		//     this.SET_TOKEN(data.token)
		//     return true
		// } catch (error) {
		//     return false
		// }
	}

	@Action
	public LogOut() {
		setAuth('');
		this.SET_TOKEN('');
		router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath } });
	}
}

export const UserModule = getModule(User);
