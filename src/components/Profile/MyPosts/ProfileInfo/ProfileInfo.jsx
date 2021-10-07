import Preloader from "../../../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9KB8nZTvF-h0eWWDnVT7n7gTev6M3hrVXcr15AsyxDuC2COqCABVuJMg8BQXJVcScIs&usqp=CAU'></img>
      </div> */}
      <div className={classes.descriptoinBlock}>
        <img
          src={props.profile.photos.large}
          className={classes.profilePhoto}
        />

        <div>
          {props.profile.fullName}
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
