import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyles from './app-header.module.scss'

const AppHeader = (props) => {

    return (
        <nav className={AppHeaderStyles.nav}>
            <ul className={AppHeaderStyles.list}>
                <li className={AppHeaderStyles.item}>
                    <a className={AppHeaderStyles.link} href='#'>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2">
                            Конструктор
                        </p>
                    </a>
                </li>
                <li className={AppHeaderStyles.item}>
                    <a className={AppHeaderStyles.link} href='#'>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default ml-2 text_color_inactive">
                            Лента заказов
                        </p>
                    </a>
                </li>
                <li className={`${AppHeaderStyles.item} pt-6 pb-6`}>
                    <a className={AppHeaderStyles.link} href='#'>
                        <Logo />
                    </a>
                </li>
                <li className={AppHeaderStyles.item}>
                    <a className={AppHeaderStyles.link} href='#'>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default ml-2 text_color_inactive">
                            Личный кабинет
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default AppHeader;