//首先引入useState、useCookie

export const useInfo = () => useState("userData", () => {
    return {
        id: 1,
        name: '用户1'
    }
})

// token
export const useToken = () => useState("token", () => null) 