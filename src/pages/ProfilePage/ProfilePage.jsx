import React, {useState} from 'react';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import Styles from './ProfilePage.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from "react-router-dom";

const ProfilePage = () => {
    const location = useLocation();

    return (
        <div className={Styles.content}>
            <ProfileNavigation/>
            {location.pathname === '/profile/orders' ? '' : <ProfileInformation/>}
            <Outlet />
        </div>
    );
};

export default ProfilePage;