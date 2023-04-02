import React from 'react';
import HistoryCard from '../HistoryCard/HistoryCard';
import Styles from './ProfileHistory.module.scss'


const ProfileHistory = () => {
    return (
        <ul className={`${Styles.content} pr-2`}>
            <HistoryCard number={228} name={'TESTNAME'} status={'готово'} price={2000}/>
        </ul>
    );
};

export default ProfileHistory;