import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "324d0b8b-dc69-4837-8bd0-c56886533425"
      },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
  })


export const getUsers = (currentPage = 1,pageSize = 1) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response =>response.data)
};

export const followApi = (id = 1) => {
    return instance.post(`follow/${id}`)
    .then(response =>response.data)
  };
  export const unFollowApi = (id = 1) => {
    return instance.delete(`follow/${id}`)
    .then(response =>response.data)
  };


  export const getUsersProfileApi = (userId =2) => {
    return instance.get(`profile/` + userId)
    .then(response =>response.data)
     
  };  

  export const LoginApi = ( ) => {
    return instance.get(`auth/me`)
    .then(response =>response.data)
     
  }; 

