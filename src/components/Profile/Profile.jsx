import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={classes.profileBody}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        saveProfile={props.saveProfile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />

      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
