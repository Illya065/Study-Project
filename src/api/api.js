import * as axios from "axios";

let apiInstance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "f16da74b-b7b2-4b6e-b088-422162e893b2",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return apiInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  postUsers(userId) {
    return apiInstance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },

  deleteUsers(userId) {
    return apiInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return apiInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId) {
    return apiInstance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return apiInstance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return apiInstance.get(`auth/me`).then((response) => response.data);
  },

  login(email, password, rememberMe = false) {
    return apiInstance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },

  logOut() {
    return apiInstance.delete(`auth/login`);
  },
};
