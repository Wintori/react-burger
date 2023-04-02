import React from 'react';
import Styles from './ResetPasswordPage.module.scss'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";
import { resetPassword } from '../../utils/api'

const ResetPasswordPage = () => {
    const [passwordValue, setpasswordValue] = React.useState('')
    const onChangePassword = e => {
        setpasswordValue(e.target.value)
    }

    const [value, setValue] = React.useState('')
    const inputRef = React.useRef(null)

    const handleReset = () => {
        resetPassword(passwordValue, value)
        .then((res)=> {
            console.log(res)
        })
    }

    return (
        <div className={Styles.content}>
            <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
            <PasswordInput
                onChange={onChangePassword}
                placeholder={'Введите новый пароль'}
                name={'password'}
                extraClass="mb-6"
                value={passwordValue}
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={e => setValue(e.target.value)}
                value={value}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20' onClick={handleReset}>
                Сохранить
            </Button>
            <p className="text text_type_main-default text_color_inactive">
                Вспомнили пароль? <Link to='/login' className={`text text_type_main-default ${Styles.link}`}>Войти</Link>
            </p>
        </div>
    );
};

export default ResetPasswordPage;