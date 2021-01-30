import axios from 'axios'
import { URL } from '@/config'
import { GetMsg } from './getmsg'
import store from '../../store'

function upload(data) {
  return new Promise((resolve, reject) => {
    axios({
        url: `${URL}/cloud/upload?token=${data.token}&path=${data.path}`,
        method: 'post',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: data.file,
      })
  })
}


async function PostUpload(data) {
  let ans = null
  ans = await upload(data)
}

export {
  PostUpload
}