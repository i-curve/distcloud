import { HTTP } from '@/libs/http'
import { URL } from '@/config'

function newFile (type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/cloud/new`,
      type: type,
      data: {
        token: data.token,
        path: data.path,
        name: data.file
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

async function PostNew(data) {
  let ans = null
  ans = await newFile('post', data)
}

export {
  PostNew
}