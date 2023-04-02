import React from 'react';
import Styles from './HistoryCard.module.scss'
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import HistoryCardImage from '../HistoryCardImage/HistoryCardImage'

const HistoryCard = (props) => {
    const dateFromServer = '2022-10-10T17:33:32.877Z'

    const {number, name, status, price } = props

    return (
        <li className={`${Styles.content} p-6`}>
            <div className={`${Styles.information} mb-6`}>
                <p className="text text_type_digits-default">{number}</p>
                <FormattedDate date={new Date(dateFromServer)} />
            </div>
            <p className="text text_type_main-medium mb-2">
                {name}
            </p>
            <p className="text text_type_main-default mb-6">
                {status}
            </p>
            <div className={Styles.footer}>
                <div className={Styles.ingredientsImages}>
                    <HistoryCardImage />
                </div>
                <div className={Styles.price}>
                    <p className="text text_type_digits-default mr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>

        </li>
    );
};

export default HistoryCard;