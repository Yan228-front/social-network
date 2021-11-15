import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SACCESS = "SAVE_PHOTO_SACCESS";

let initialState = {
  posts: [
    { id: 1, message: "How are you?", likesCount: "5" },
    { id: 2, message: "About the world It", likesCount: "20" },
    { id: 3, message: "News in zaporizhia", likesCount: "30" },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO_SACCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSaccess = (photos) => ({
  type: SAVE_PHOTO_SACCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSaccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
};

export default profileReducer;
