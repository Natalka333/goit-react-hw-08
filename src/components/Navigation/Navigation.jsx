import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'



const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;
    };

    return (
        <>
            {/* <div className={css.navContainer}> */}
            <nav className={css.nav}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/contacts" className={buildLinkClass}>Contacts
                </NavLink>
            </nav>
            {/* </div> */}
        </>
    )
};


export default Navigation;


