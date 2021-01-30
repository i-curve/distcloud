import { HTTP } from '@/libs/http'
import { URL } from '@/config'
import store from '../../store'

function getMsg (type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/cloud/show`,
      type: type,
      data: {
        token: data.token,
        path: data.path
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

async function GetMsg (data) {
  let ans = null
  ans = await getMsg('get', data)
  if (ans.data.code === 200) {
    console.log(ans.data.data)
    store.commit("setItem", ans.data)
  } else {
    alert("错误: " + ans.data.msg)
  }
}

export {
  GetMsg
}