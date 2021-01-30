import { HTTP } from '@/libs/http'
import { URL } from '@/config'

function download (type, data) {
  return new Promise((resolve, reject) => {
    var options = {
      url: `${URL}/cloud/download`,
      type: type,
      data: {
        token: data.token,
        path: data.path,
        filename: data.filename
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
async function GetDownload(data) {
  let ans = null
  console.log(data)
  // ans = await download('get', data)
  // console.log(ans)
  window.open(`${URL}/cloud/download`+`?token=${data.token}&path=${data.path}&filename=${data.filename}`, '_self')
}

export {
  GetDownload
}