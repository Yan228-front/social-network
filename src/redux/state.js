import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you?", likesCount: "5" },
        { id: 2, message: "I am not inglish", likesCount: "20" },
        { id: 2, message: "I am not inglish", likesCount: "30" },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      messages: [{ id: 1, message: "Hi" }],

      dialogs: [
        { id: 1, name: "Yan" },
        { id: 2, name: "Den" },
        { id: 3, name: "Sveta" },
      ],

      newMessageBody: "",
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  massageNewText(newText) {
    this._state.dialogsPage.massageText = newText;
    this._callSubscriber(this._state);
  },

  addMessagePost() {
    let newMessages = {
      id: 5,
      message: this._state.dialogsPage.messageText,
    };

    this._state.dialogsPage.messages.push(newMessages);
    this._state.dialogsPage.massageText = "";
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
