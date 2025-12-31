import css from "./RegisterForm.module.css";

import { Formik, Form, Field } from "formik";

export default function RegisterForm() {
    const handleSubmit = (event) => {

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