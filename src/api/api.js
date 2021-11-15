import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f8c377e3-49f5-4a2e-9c22-60804c7a5189",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId} `);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`); //api/1.1
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe }); //api/1.1
  },

  logout() {
    return instance.delete(`auth/login`); //api/1.1
  },
};

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`follow?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const securitiAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
