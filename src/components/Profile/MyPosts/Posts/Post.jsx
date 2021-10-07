import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src='https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg'
        alt='sad'
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
