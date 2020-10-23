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