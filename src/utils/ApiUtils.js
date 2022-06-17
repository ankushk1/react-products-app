import axios from "axios";
const API_URL = 'http://localhost:8000'


export const signup = async (user) => {
  try{
    const response = await axios({
      method: 'POST',
      url :`${API_URL}/users/signup`,
      data: user
    })
    console.log(response);
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
}


export const signin =async (user) => {
  try{
    const response = await axios({
      method: 'POST',
      url :`${API_URL}/users/signin`,
      data: user
    })
    console.log(response);
    debugger
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
} 