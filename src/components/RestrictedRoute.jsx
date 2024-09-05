import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


/**
 * Компонент RestrictedRoute предназначен для ограничения доступа к определённым маршрутам.
 * Если пользователь авторизован, он будет перенаправлен на указанный маршрут.
 * В противном случае будет отображён переданный компонент.
 *
 * @param {Object} props - Свойства компонента
 * @param {React.Component} props.component - Компонент, который нужно отобразить, если пользователь не авторизован
 * @param {string} [props.redirectTo='/'] - Маршрут для перенаправления авторизованного пользователя (по умолчанию '/')
 */
// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//     // Получаем статус авторизации пользователя из состояния Redux
//     const isLoggedIn = useSelector(selectIsLoggedIn);

//     // Если пользователь авторизован, перенаправляем его на указанный маршрут
//     // В противном случае отображаем переданный компонент
//     return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
// };