import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';



const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);


    const buildLinkClass = ({ isActive }) => {
        return isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;
    };

    return (
        <>
            <nav className={css.nav}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                {isLoggedIn && (<NavLink to="/contacts" className={buildLinkClass}>Contacts
                </NavLink>)}
            </nav>

        </>
    )
};


export default Navigation;


