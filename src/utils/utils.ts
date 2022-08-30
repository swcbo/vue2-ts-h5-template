export const setAuth = (auth: string) => {
    localStorage.setItem('auth', auth)
}

export const getAuth = () => {
    const auth = localStorage.getItem('auth')
    return auth
        ? auth
        : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYxNjIsImFjY291bnQiOiLlt6flqJjmipXnpagiLCJwYXNzd29yZCI6ImU0M2MyMjM5ZDRiMTJiNTIwY2JjNDUwMmQ4NzE1MDZmIiwibGFzdGlwIjoiMjIzLjIxMy4xNjguMjUxIiwibG9naW50aW1lcyI6IjIwMjItMDgtMzAgMjE6MTY6MDIiLCJwaG9uZSI6IiIsIm5hbWUiOiLlt6flqJjmipXnpagiLCJjcmVhdGVfdGltZSI6IjIwMjItMDgtMzAgMTU6MDY6NDMiLCJ1cGRhdGVfdGltZSI6IjIwMjItMDgtMzAgMTU6MDY6NDMiLCJzdXBlcmlvciI6MSwibm90ZSI6IiIsInJvbGUiOjI1LCJyZW1vdmVfc3RhdHVzIjoxLCJwcm9qZWN0X2lkcyI6WzE1XSwidHlwZSI6MSwid2VjaGF0X29wZW5faWQiOiIiLCJnZW5kZXIiOjMsImxhbmd1YWdlIjoiIiwid2VjaGF0X3Nlc3Npb25fa2V5IjoiIiwiY2l0eSI6IiIsImNvdW50cnkiOiIiLCJwcm92aW5jZSI6IiIsImF2YXRhcl91cmwiOiIiLCJkaXNhYmxlX3N0YXR1cyI6MSwiY291bnRyeV9jb2RlIjoiIiwicHJvamVjdF9pZCI6MSwic3BvcnRzX3B1bmNoX251bWJlciI6MCwiYmlydGhkYXkiOiIyMDIyLTA4LTMwIiwidmlwX2VuZF90aW1lIjoiMjAyMi0wOC0zMCIsImNvdXJzZV90eXBlIjo3LCJhZ2UiOiIiLCJpZF9udW1iZXIiOiIiLCJpbnRlZ3JhbCI6MCwidHlwZV9zdHIiOiLlkI7lj7DnrqHnkIblkZjnlKjmiLciLCJkaXNhYmxlX3N0YXR1c19zdHIiOiLmraPluLjkvb_nlKgiLCJwcm9qZWN0X2xpc3Rfc3RyIjoi5oC75ZCO5Y-wIiwiY291cnNlX3R5cGVfc3RyIjoi5LmQ5ruR5bCP5a6dIiwicm9sZV9zdHIiOiLnm7TnlLciLCJpYXQiOjE2NjE4NjU4MTEsImV4cCI6MTY2MTk1MjIxMX0.FLqtHmPkJwIoaRx9uQyFbFYTYDXGR1uG3v2iW4QO8x8'
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
