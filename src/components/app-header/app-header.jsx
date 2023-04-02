import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyles from './app-header.module.scss'
import { NavLink } from "react-router-dom";

const AppHeader = (props) => {

    return (
        <nav className={AppHeaderStyles.nav}>
            <ul className={AppHeaderStyles.list}>
                <li className={AppHeaderStyles.item}>
                    <NavLink to='/' className={AppHeaderStyles.navLink}>
                        {({ isActive }) => (
                            <div className={AppHeaderStyles.link}>
                                <BurgerIcon type={isActive ? "primary" : "secondary"} />
                                <p className={isActive ? `text text_type_main-default ${AppHeaderStyles.activeLink}` : 'text text_type_main-default text_color_inactive'}>
                                    Конструктор
                                </p>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className={AppHeaderStyles.item}>
                    <NavLink to='/order' className={AppHeaderStyles.navLink}>
                        {({ isActive }) => (
                            <div className={AppHeaderStyles.link}>
                                <ListIcon type={isActive ? "primary" : "secondary"} />
                                <p className={isActive ? `text text_type_main-default ${AppHeaderStyles.activeLink}` : 'text text_type_main-default text_color_inactive'}>
                                    Лента заказов
                                </p>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className={`${AppHeaderStyles.item} pt-6 pb-6`}>
                    <a className={AppHeaderStyles.link} href='#'>
                        <Logo />
                    </a>
                </li>
                <li className={AppHeaderStyles.item}>
                    <NavLink to='/profile' className={AppHeaderStyles.navLink}>
                        {({ isActive }) => (
                            <div className={AppHeaderStyles.link}>
                                <ProfileIcon type={isActive ? "primary" : "secondary"} />
                                <p className={isActive ? `text text_type_main-default ${AppHeaderStyles.activeLink}` : 'text text_type_main-default text_color_inactive'}>
                                    Личный кабинет
                                </p>
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default AppHeader;