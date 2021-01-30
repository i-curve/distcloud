import { HTTP } from '@/libs/http'
import { URL } from '@/config'
import router from '../../router'
import store from '../../store'
function loginUser (type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/login`,
      type: type,
      data: {
        username: data.username,
        password: data.password
      },
      success (ans) {
        resolve(ans)
      },
      error (ans) {
        reject(ans)
      }
    }
    console.log(options.url)
    HTTP(options)
  })
}

async function PostLogin (data) {
  let ans = null
  ans = await loginUser('post', data)
  if (ans.data.code === 200) {
    sessionStorage.setItem("token", ans.data.data.token)
    store.commit("setToken", ans.data.data)
    router.push("/")
  } else {
    sessionStorage.removeItem("token")
    alert("身份验证失败: "+ans.data.msg)
  }
}

export {
  PostLogin
}