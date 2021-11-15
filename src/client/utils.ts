/*
*  简单解析url query
*/

export const parseUrlQuery = (query: string) => {  
    const paramArr = query.split('&')
    const paramObj = {}
    paramArr.forEach(param => {
        const [key, value] = param.split('=')
        paramObj[`${key}`] = value
    })
    return paramObj
}