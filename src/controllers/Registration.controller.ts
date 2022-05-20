import { webservice } from 'webservice'

const URL_API_GATEWAY = {
  baseURL:
    "http://localhost:9090"
}

export default class Registration {
  static getClient(cpfUser: string) {
    return new Promise((resolve, reject) => {
      webservice(URL_API_GATEWAY)
        .get(`/user/cpfUser=${cpfUser}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err)
          console.log('axios: ', err)
        })
    })
  }
}