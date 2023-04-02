import React from 'react';
import Styles from './RegistrationPage.module.scss'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";
import { registerAccount } from '../../utils/api'

const RegistrationPage = () => {
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }


    const [passwordValue, setpasswordValue] = React.useState('')
    const onChangePassword = e => {
        setpasswordValue(e.target.value)
    }

    const [nameValue, setnameValue] = React.useState('')
    const inputRef = React.useRef(null)

    const handleRegister = () => {
        registerAccount(value, passwordValue, nameValue)
            .then((res)=> {
                console.log(res)
            })
    }

    return (
        <div className={Styles.content}>
            <p className="text text_type_main-medium mb-6">Регистрация</p>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setnameValue(e.target.value)}
                value={nameValue}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />
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
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20' onClick={handleRegister}>
                Зарегистрироваться
            </Button>
            <p className="text text_type_main-default text_color_inactive">
                Уже зарегистрированы? <Link to='/login' className={`text text_type_main-default ${Styles.link}`}>Войти</Link>
            </p>
        </div>
    );
};

export default RegistrationPage;