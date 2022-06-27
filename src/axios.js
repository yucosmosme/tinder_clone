import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8001'
  baseURL: "https://tinder-clone-backend-mi.herokuapp.com/" //헤로쿠로 배포된 서버 도메인
})

export default instance;