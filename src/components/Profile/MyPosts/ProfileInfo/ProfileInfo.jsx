import Preloader from "../../../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../../assets/imeges/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import { useState } from "react";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    props.savePhoto(e.target.files[0]);
  };

  const onSubmit = (boolean) => {
    setEditMode(boolean);
  };

  return (
    <div>
      <div className={classes.descriptoinBlock}>
        <img
          src={props.profile.photos.large || userPhoto}
          className={classes.profilePhoto}
          alt='userPhoto'
        />
        <div className={classes.inputWrapper}>
          {props.isOwner && (
            <input
              type={"file"}
              onChange={onMainPhotoSelected}
              className={classes.inputFile}
            />
          )}
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            saveProfile={props.saveProfile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <div className={classes.profileName}>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={classes.profileName}>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>Редактировать</button>
        </div>
      )}
      <div>Полное имя: {props.profile.fullName}</div>
      <div>Ищю работу: {props.profile.lookingForAJob ? "yes" : "no"}</div>
      {props.profile.lookingForAJob && (
        <div>
          Мои професиональние скилы: {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>Про меня: {props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
