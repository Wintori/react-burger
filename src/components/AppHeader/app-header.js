import { Logo, Icons, Typography, Box, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';

export default class AppHeader extends React.Component {
    render() {
        return (
            <header style= {{ backgroundColor: '#1C1C21', color: 'white'}} className="m-10">
                <div style={{ width: "100%", maxWidth: "1239px", display: 'flex', alignItems: "center", justifyContent: "center", padding: '0', margin: '0 auto' }}>
                    <div style={{ color: 'white', margin: '0 49px 0 0', display: 'flex' }}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default" style={{ margin: "0 0 0 9px" }}>
                            Конструктор
                        </p>
                    </div>
                    <div style={{ color: 'white', display: 'flex' }}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive" style={{ margin: "0 0 0 9px" }}>
                            Лента заказов
                        </p>
                    </div>
                    <div style={{ color: 'white', margin: '0 0 0 132px', padding: '24px', display: 'flex' }}>
                        <Logo />
                    </div>
                    <div style={{ color: 'white', margin: '0 0 0 auto', display: 'flex' }} className="m-8">
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive" style={{ margin: "0 0 0 11px" }}>
                            Личный кабинет
                        </p>
                    </div>
                </div> 
                
            </header>
        );
    }
}