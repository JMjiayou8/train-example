import axios from 'axios'

// 统一处理接口入参
// axios.interceptors.request.use((config) => {})
// 统一处理接口回参
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  let err = error.response.data;
  return err
});