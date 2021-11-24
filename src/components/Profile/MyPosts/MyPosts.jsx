import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";
import { useFormik } from "formik";

const MyPostForm = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
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
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div>
        <label htmlFor='post'>My post</label>
      </div>
      <textarea
        name='post'
        type='text'
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
        className={classes.textarea}
      />
      <div>
        <button onClick={onAddPost} className={classes.bottonPost}>
          Add post
        </button>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </form>
  );
};

export default MyPostForm;
