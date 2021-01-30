import { HTTP } from '@/libs/http'
import { URL } from '@/config'

function deleteFile (type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/cloud/delete`,
      type: type,
      data: {
        token: data.token,
        path: data.path,
        file: data.file
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

async function PostDelete(data) {
  let ans = null
  ans = await deleteFile('post', data)
}

export {
  PostDelete
}