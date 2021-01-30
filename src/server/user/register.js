import { HTTP } from '@/libs/http'
import { URL } from '@/config'
import router from '../../router'

function registerUser(type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/register`,
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
      HTTP(options)
  })
}

async function PostRegister(data) {
  let ans = null
  ans = await registerUser('post', data)
  if (ans.data.code === 200) {
    alert("注册成功,进入登录页面")
    router.push('/login')
  }else {
    alert("注册失败: "+ans.data.msg)
  }
}

export {
  PostRegister
}