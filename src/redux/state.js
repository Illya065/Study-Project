// const ADD_POST = "ADD-POST";
// const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
// const ADD_MESSAGE = "ADD-MESSAGE";
// const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";

import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer'

const store = {
  _state: {
    profilePage: {
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
      newPostText: "",
    },

    dialogsPage: {
      dialogData: [
        {
          name: "Holly",
          id: 1,
        },
        {
          name: "Julia",
          id: 2,
        },
        {
          name: "Victoria",
          id: 3,
        },
        {
          name: "Alan",
          id: 4,
        },
        {
          name: "Seth",
          id: 5,
        },
        {
          name: "Michael",
          id: 6,
        },
        {
          name: "Suzan",
          id: 7,
        },
        {
          name: "Vi",
          id: 8,
        },
        {
          name: "Chan",
          id: 9,
        },
        {
          name: "Sibyla",
          id: 10,
        },
      ],
      messageData: [
        {
          text: "Hi",
          class: "guest",
        },
        {
          text: "Hello",
          class: "my__message",
        },
        {
          text: "How r u",
          class: "guest",
        },
        {
          text: "Fine",
          class: "my__message",
        },
        {
          text: "And u?",
          class: "my__message",
        },
        {
          text: "Same",
          class: "guest",
        },
        {
          text: "Are u heard last news, about Michael",
          class: "guest",
        },
        {
          text: "No, what happend",
          class: "my__message",
        },
      ],
      newMessageText: "",
    },

    navBar: {
      friendsData: [
        {
          name: "Illya",
        },
        {
          name: "Sonya",
        },
        {
          name: "Tom",
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  reRender() {},

//   _addPost() {
//     let newPost = {
//       id: 4,
//       text: this._state.profilePage.newPostText,
//       likes: 2,
//     };
//     this._state.profilePage.postsData.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this.reRender(this._state);
//   },

//   _addNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this.reRender(this._state);
//   },

//   _addMessage() {
//     let newMessage = {
//       text: this._state.dialogsPage.newMessageText,
//       class: "my__message",
//     };
//     this._state.dialogsPage.messageData.push(newMessage);
//     this._state.dialogsPage.newMessageText = "";
//     this.reRender(this._state);
//   },

//   _addNewMessageText(newMessage) {
//     this._state.dialogsPage.newMessageText = newMessage;
//     this.reRender(this._state);
//   },

  subscribe(observer) {
    this.reRender = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.navBar = navbarReducer(this._state.navBar, action)

    this.reRender(this._state);
  },
};

// export function addPostActionCreator() {
//   return {
//     type: ADD_POST,
//   };
// }

// export function addNewPostTextActionCreator(text) {
//   return {
//     type: ADD_NEW_POST_TEXT,
//     newText: text,
//   };
// }

// export function addMessageCreateAction() {
//   return {
//     type: ADD_MESSAGE,
//   };
// }

// export function addNewMessageTextcCreateAction(text) {
//   return {
//     type: ADD_NEW_MESSAGE_TEXT,
//     newText: text,
//   };
// }

export default store;
