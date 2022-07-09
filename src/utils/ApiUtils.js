import axios from "axios";
const API_URL = 'http://localhost:8000'


export const signup = async (user) => {
  try{
    const response = await axios({
      method: 'POST',
      url :`${API_URL}/users/signup`,
      data: user
    })
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
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
} 


export const getAllProducts = async () => {
  try{
    const response = await axios({
      method:'GET',
      url: `${API_URL}/products/getProducts`,
      headers: {
        'x-access-token': localStorage.getItem('jwt_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  
      }
    })
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
}


export const createProduct = async (product) => {
  try{
    const response = await axios({
      method:'POST',
      url: `${API_URL}/products/createProduct`,
      headers: {
        'x-access-token': localStorage.getItem('jwt_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  
      },
      data: product
    })
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
}

export const updateProduct = async (productId, product) => {
  try{
    const response = await axios({
      method:'PUT',
      url: `${API_URL}/products/updateProduct/${productId}`,
      headers: {
        'x-access-token': localStorage.getItem('jwt_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  
      },
      data: product
    })
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
}

export const deleteProduct = async (productId) => {
  try{
    const response = await axios({
      method:'DELETE',
      url: `${API_URL}/products/deleteProduct/${productId}`,
      headers: {
        'x-access-token': localStorage.getItem('jwt_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  
      },
    })
    return response
  } catch(err){
    console.log(err);
    return err.response
  }
}