import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './app-header.css';

export default class AppHeader extends React.Component {
    render() {
        return (
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item-list">
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2">
                            Конструктор
                        </p>
                    </li>
                    <li className='header__item-list'>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default ml-2 text_color_inactive">
                            Лента заказов
                        </p>
                    </li>
                    <li className='header__item-list pt-6 pb-6'>
                        <Logo />
                    </li>
                    <li className="header__item-list">
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default ml-2 text_color_inactive">
                            Личный кабинет
                        </p>
                    </li>
                </ul> 
            </nav>
        );
    }
}