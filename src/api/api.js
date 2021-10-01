import axios from "axios";




const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "324d0b8b-dc69-4837-8bd0-c56886533425"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const getUsers = (currentPage = 1, pageSize = 1) => {

  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
};

export const followApi = (id = 1) => {
  return instance.post(`follow/${id}`)
     
};
export const unFollowApi = (id = 1) => {
  return instance.delete(`follow/${id}`)
    
};


export const getUsersProfileApi = (userId = 2) => {
  return instance.get(`profile/` + userId)
    .then(response => response.data)

};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)

  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })

  },
  logout() {
    return instance.delete(`auth/login`)
  },
};
export const ProfileApi = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    debugger
    return instance.put(`profile/status/`, { status: status })
  },
}
