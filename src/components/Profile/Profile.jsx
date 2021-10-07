import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
