import axios from "./axios";

const URL = "http://192.186.48.40:5000/";

// require("./product.js")
export function getProductApi(langang) {
  // console.log(`${URL} /product_api?language=en`)
  return (
    axios.get(`${URL}/product_api?language=${langang}`))
}


//login and registration 
export function loginApi(phone) {
  console.log(`${URL}/`)
  return (
    axios.post(`${URL}/user/login`, { phone }))
}
export function LoginConfiramtion(phone, OTP) {
  console.log(`${URL} /`)
  return (
    axios.post(`${URL}/login_phone_code`, { phone, OTP }))
}
export function Registaration(user_name, phone) {
  // console.log(`${URL} /admin/login`)
  return (
    axios.post(`${URL}/user_api`, { user_name, phone }))
}
export function updateUserInformation(id, userData) {

  return (
    axios.post(`${URL}/user_api/` + id, userData))
}


/// order apo 
export function createOrderApi(order) {

  return (
    axios.post(`${URL}/order_api`, order))
}