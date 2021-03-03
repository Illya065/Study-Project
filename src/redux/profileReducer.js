import axios from "axios";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SERUSERPROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    {
      text: "Lorem",
      likes: 83,
      id: 1,
    },
    {
      text: "kf pafaskfm almaf aelam",
      likes: 159,
      id: 2,
    },
    {
      text: "kfafmklae mamf kma mamd",
      likes: 201,
      id: 3,
    },
  ],
  profile: {
    fullname: null,
    contacts: {
      facebook: null,
    },
  },
  status: "",
};

function profileReducer(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        text: action.newPostText,
        likes: 2,
      };

      stateCopy.postsData.push(newPost);
      return stateCopy;

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS: {
      if (action.status) {
        return {
          ...state,
          status: action.status,
        };
      } else {
        return {
          ...state,
          status: "None",
        };
      }
    }

    default:
      return state;
  }
}

export function addPostActionCreator(newPostText) {
  return {
    type: ADD_POST,
    newPostText,
  };
}

export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const profileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
