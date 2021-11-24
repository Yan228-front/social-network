import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "How are you?", likesCount: "5" },
    { id: 2, message: "I am not inglish", likesCount: "20" },
    { id: 2, message: "I am not inglish", likesCount: "30" },
  ],
};

test("my post", () => {
  let action = addPostActionCreator("it-kamasutra");

  let newPost = profileReducer(state, action);

  expect(newPost.posts.length).toBe(4);
});
