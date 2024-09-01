import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup";

import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";


import css from './LoginForm.module.css'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid format email!")
        .required("Required"),

    password: Yup.string()
        .min(8, "Too Short!")
        .matches(/[a-z]/, "Must be a lowercase letter! ")
        .matches(/[0-9]/, "Must be a number! ")
        .required("Required"),
});



const initialValues = {
    email: "",
    password: "",
};


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log("Login values:", values);

        dispatch(login({
            email: values.email,
            password: values.password,
        }));
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
        >
            <Form>

                <label className={css.label} >Email</label>
                <Field className={css.field} type="email" name="email" />
                <ErrorMessage className={css.error} name="email" component="div" />

                <label className={css.label} >Password</label>
                <Field className={css.field} type="password" name="password" />
                <ErrorMessage className={css.error} name="password" component="div" />


                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}

export default LoginForm


