/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 14:09:42
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-25 15:46:12
 */ 
export const setAuth = (auth: string) => {
	localStorage.setItem('auth', auth);
};

export const getAuth = () => {
	const auth = localStorage.getItem('auth');
	return auth ? auth : '';
};