import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup";


import css from './RegistrationForm.module.css'
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";





const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

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
    username: "",
    email: "",
    password: "",


};


const RegistrationForm = () => {
    console.log("registrationForm rendered")

    const dispatch = useDispatch();



    const handleSubmit = (values, actions) => {
        console.log("Registration values:", values);

        dispatch(register({
            name: values.username,
            email: values.email,
            password: values.password,
        }));
        actions.resetForm();
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
        >
            <Form>
                <label className={css.label} >Name</label>
                <Field className={css.field} type="text" name="username" />
                <ErrorMessage className={css.error} name="username" component="div" />

                <label className={css.label} >Email</label>
                <Field className={css.field} type="email" name="email" />
                <ErrorMessage className={css.error} name="email" component="div" />

                <label className={css.label} >Password</label>
                <Field className={css.field} type="password" name="password" />
                <ErrorMessage className={css.error} name="password" component="div" />


                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm
