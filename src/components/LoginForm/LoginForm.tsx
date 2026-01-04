import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm()
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field type="text" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}