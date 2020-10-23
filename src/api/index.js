import axios from "./axios";

const URL = "http://209.97.181.175:5000/";
import AsyncStorage from '@react-native-community/async-storage'

export async function saveTokenAndUserData(user) {
  try {
    await AsyncStorage.setItem(
      'user',
      JSON.stringify(user)
    );
  } catch (error) {
    console.log(error)

  }
}
export const clearAppData = async function () {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error('Error clearing app data.');
  }
}
export async function getToken(setState) {
  try {
    const user = await AsyncStorage.getItem('user')
    const { lastname, firstname, token, ...rest } = JSON.parse(user);
    setState({
      token
    })
    // console.log(token);
    // return token;

  } catch (err) {

  }
}

// console.log(getToken());
// getToken();
export function getCategoryApi(token) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/shop/category`)
  )
}
export function getShopOfCategoryApi(id, token) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/shop/` + id)
  )
}


export function getShopProducts(id, token) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/shop/` + id)
  )
}

export function updataStatus(token, data) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/user/update-state`, data)
  )
}
//order
export function getUserOrders(token) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/order/userOrder`)
  )
}
export function ordreProduct(token, data) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/order/userOrder`, data)
  )
}
export function orderOffer(token, data) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/order/offer`, data)
  )
}
export function orderMessage(token, data) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/order/message`, data)
  )
}

export function orderAccept(token, data) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${token}`,
  }
  return (
    axios.post(`${URL}/order/accept-offer`, data)
  )
}

