import { useFormik } from "formik";

const ProfileDataForm = (props) => {
  const formik = useFormik({
    initialValues: {
      fullName: props.profile.fullName,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      aboutMe: props.profile.aboutMe,
      contacts: "",
    },
    onSubmit: (formData) => {
      console.log(formData.fullName, formData.lookingForAJob);
      props.saveProfile(formData);
      props.onSubmit(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <button onClick={props.goToEditMode}>Сохранить</button>
        </div>
        <label htmlFor='fullName'>Полное имя</label>
        <div>
          <input
            id='fullName'
            name='fullName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </div>
        <label htmlFor='lookingForAJob'>Ищю работу</label>
        <div>
          <input
            id='lookingForAJob'
            name='lookingForAJob'
            type='checkbox'
            onChange={formik.handleChange}
            value={formik.values.lookingForAJob}
          />
        </div>
        <div>
          <label htmlFor='lookingForAJobDescription'>
            Мои професиональние скилы
          </label>
          <div>
            <textarea
              id='lookingForAJobDescription'
              name='lookingForAJobDescription'
              onChange={formik.handleChange}
              value={formik.values.lookingForAJobDescription}
            />
          </div>
        </div>
        <label htmlFor='aboutMe'>Про меня</label>
        <div>
          <input
            id='aboutMe'
            name='aboutMe'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.aboutMe}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileDataForm;
