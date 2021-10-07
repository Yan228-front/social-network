import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";
import { useFormik } from "formik";

const MyPosts = (props) => {
  // let postsElement = props.posts.map((p) => (
  //   <Post message={p.message} likesCount={p.likesCount} />
  // ));

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  return (
    <div className={classes.postBlock}>
      <MyPostForm />
      {/* <h3>My post</h3>

      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>

      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>

      <div className={classes.posts}>{postsElement}</div> */}
    </div>
  );
};

const MyPostForm = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  const formik = useFormik({
    initialValues: {
      post: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      //<div className={classes.posts}>{postsElement}</div>
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='post'>My post</label>
      </div>
      <textarea
        name='post'
        type='text'
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />

      <button onClick={onAddPost}>Add post</button>
      <div className={classes.posts}>{postsElement}</div>
    </form>
  );
};

export default MyPostForm;
