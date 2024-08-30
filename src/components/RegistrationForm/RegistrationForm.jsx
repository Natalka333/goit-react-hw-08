import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup";


import css from './RegistrationForm.module.css'
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";





const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Слишком короткое имя!")
        .max(50, "Слишком длинное имя!")
        .required("Обязательно"),

    email: Yup.string()
        .email("Неверный формат email!")
        .required("Обязательно"),

    password: Yup.string()
        .min(8, "Пароль должен быть не менее 8 символов!")
        .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву!")
        .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву!")
        .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру!")
        .matches(/[@$!%*?&#]/, "Пароль должен содержать хотя бы один специальный символ!")
        .required("Обязательно"),
});



const initialValues = {
    name: "",
    email: "",
    password: "",


};


const RegistrationForm = () => {
    const dispatch = useDispatch();


    const handleSubmit = (values, actions) => {
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
