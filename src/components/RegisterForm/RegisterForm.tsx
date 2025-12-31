import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";

import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        console.log(values);
        actions.resetForm()
    }

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label}>
                    Username
                    <Field type="text" name="name"/>
                </label>
                <label className={css.label}>
                    Email
                    <Field type="text" name="email"/>
                </label>
                <label className={css.label}>
                    Password
                    <Field type="text" name="password"/>
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}