import axios from 'axios'
import qs from 'qs'

function HTTP (options) {
    if (!options.url) {
        throw new Error("没有填写url")
    }
    options.type = options.type.toUpperCase()
    if (options.type === 'POST') {
        return axios({
            url: options.url,
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: qs.stringify({
                ...options.data
            })
        })
        .then((res) => {
            options.success(res)
        })
        .catch((err) => {
            options.error(err)
        })
    }else if (options.type === 'GET') {
        if (options.data) {
            options.url = options.url.indexOf("?") === -1
            ? options.url + '?' + formatDate(options.data)
            : options.url + formatDate(options.data)
        }
        return axios({
            url: options.url,
            method: "get",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((res) => {
            options.success(res)
        })
        .catch((err) => {
            options.error(err)
        })
    }else {
        throw new Error("请输入正确type: POST/GET.")
    }
}
function formatDate (obj) {
    var str = ""
    for (var key in obj) {
        str += key + '=' +obj[key] + '&'
    }
    return str.replace(/&$/, '')
}
export {
    HTTP
}