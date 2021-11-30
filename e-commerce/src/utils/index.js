export const isLogin = () => {
    console.log('dsdas')
    if (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
        console.log('bilo sta')
        return true;
    }

    return false;
}


export const login = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
}
