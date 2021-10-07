import { Field, Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";

// const validatePassword = (values) => {
//   let error = "";
//   const passwordRegex = /(?=.*[0-9])/;
//   if (!values) {
//     error = "*Required";
//   } else if (values.length < 8) {
//     error = "*Password must be 8 characters long.";
//   } else if (!passwordRegex.test(values)) {
//     error = "*Invalid password. Must contain one number.";
//   }
//   return error;
// };

let LoginFormik = (props) => {
  const valudationSchema = yup.object().shape({
    email: yup.string().email("Введите верный email").required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    rememberMe: yup.boolean(),
  });

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={(formData) => {
          console.log(formData.email, formData.password, formData.rememberMe);
          props.login(formData.email, formData.password, formData.rememberMe);
        }}
        validationSchema={valudationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={"form"}>
            <p>
              <label htmlFor={"email"}>Email</label>
              <br />
              <input
                className={"input"}
                type={"text"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && (
              <p className={"error"}>{errors.email}</p>
            )}

            {/* <Field
              type='password'
              name='password'
              validate={validatePassword}
            />

            {errors.password && <div>{errors.password}</div>} */}

            <p>
              <label htmlFor={"password"}>Пароль</label>
              <br />
              <input
                className={"input"}
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <p className={"error"}>{errors.password}</p>
            )}

            <p>
              <label htmlFor={"rememberMe"}>Запомнить меня</label>
              <br />
              <input
                className={"input"}
                type={"checkbox"}
                name={"rememberMe"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rememberMe}
              />
            </p>

            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Отправить
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginFormik);
