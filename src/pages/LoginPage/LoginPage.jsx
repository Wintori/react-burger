import React, { useState } from 'react';
import Styles from './LoginPage.module.scss'
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";
import { loginAccount } from '../../utils/api';
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie } from '../../utils/cookie';

const LoginPage = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }


    const [passwordValue, setpasswordValue] = React.useState('')
    const onChangePassword = e => {
        setpasswordValue(e.target.value)
    }

    const handleLogin = () => {
        loginAccount(value, passwordValue)
            .then((res) => {
                setCookie('refreshToken', res.refreshToken);
                setCookie('accessToken', res.accessToken);
                navigate('/')
            })
    }

    return (
        <div className={Styles.content}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangePassword}
                placeholder={'Пароль'}
                name={'password'}
                extraClass="mb-6"
                value={passwordValue}
            />
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20' onClick={handleLogin}>
                Войти
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-4">
                Вы — новый пользователь? <Link to='/register' className={`text text_type_main-default ${Styles.link}`}>Зарегистрироваться</Link>
            </p>
            <p className="text text_type_main-default text_color_inactive">
                Забыли пароль? <Link to='/forgot-password' className={`text text_type_main-default ${Styles.link}`}>Восстановить пароль</Link>
            </p>
        </div>
    );
};

export default LoginPage;