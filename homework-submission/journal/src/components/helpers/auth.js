import axios from 'axios'

export function executeGetRequest(url, callBack, errorCallback = () => { }) {
  axios
    .get(`http://142.93.51.96${url}`, {
      headers: {
        Authorization: `Bearer:${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      callBack(response.data)
    })
    .catch(err => errorCallback(err))
}
