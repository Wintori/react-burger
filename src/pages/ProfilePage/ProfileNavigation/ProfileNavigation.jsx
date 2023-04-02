import React, { useState } from 'react';
import Styles from './ProfileNavigation.module.scss'
import { NavLink } from "react-router-dom";
import { logoutAccount } from '../../../utils/api'
import { getCookie, setCookie } from '../../../utils/cookie'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { SET_SECTION_PROFILE, SET_SECTION_HISTORY } from '../../../services/actions/profile'
import { useLocation } from "react-router-dom";

const ProfileNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch()

    const handleProfile = () => {
        dispatch({
            type: SET_SECTION_PROFILE,
        })
    }

    const handleHistory = () => {
        dispatch({
            type: SET_SECTION_HISTORY,
        })
    }

    const handleLogout = () => {
        logoutAccount(getCookie('refreshToken'))
            .then((res) => {
                if (res.success) {
                    setCookie('accessToken', '')
                    setCookie('refreshToken', '')
                    navigate('/')
                }

            })
    }

    return (
        <nav className={`${Styles.content} mr-15`}>
            <NavLink
                className={Styles.link}
                strict to="/profile"
                onClick={handleProfile}>
                {({ isActive }) => (
                    <p className={isActive && location.pathname !== '/profile/orders' ? `text text_type_main-medium ${Styles.link_text} ${Styles.link_active}` : `text text_type_main-medium text_color_inactive ${Styles.link_text}`}>
                        Профиль
                    </p>
                )}
            </NavLink>
            <NavLink
                className={Styles.link}
                strict to="/profile/orders"
                onClick={handleHistory}>
                {({ isActive }) => (
                    <p className={isActive ? `text text_type_main-medium ${Styles.link_text} ${Styles.link_active}` : `text text_type_main-medium text_color_inactive ${Styles.link_text}`}>
                        История заказов
                    </p>
                )}
            </NavLink>
            <NavLink
                className={Styles.link}
                strict to="/"
                onClick={handleLogout}>
                {({ isActive }) => (
                    <p className={isActive ? `text text_type_main-medium ${Styles.link_text} ${Styles.link_active}` : `text text_type_main-medium text_color_inactive ${Styles.link_text}`}>
                        Выход
                    </p>
                )}
            </NavLink>
            <p className="text text_type_main-default text_color_inactive mt-20" style={{ opacity: 0.6 }}>
                В этом разделе вы можете
                изменить свои персональные данные
            </p>
        </nav>
    );
};

export default ProfileNavigation;