export const setAuth = (auth: string) => {
    localStorage.setItem('auth', auth)
}

export const getAuth = () => {
    const auth = localStorage.getItem('auth')
    return auth ? auth : ''
}
export const setCookie = (name: string, value: string, expiredays = 0) => {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    // document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    document.cookie =
        name + '=' + value + (expiredays == null ? '' : ';expires=' + exdate.toUTCString())
}

export const getCode = (code: string) => {
    const reg = new RegExp('(^|&)' + code + '=([^&]*)(&|$)')
    const r = location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    } else {
        return null
    }
}
export const getCookie = (name: string) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    if (arr) {
        return arr[2]
    } else {
        return null
    }
}
