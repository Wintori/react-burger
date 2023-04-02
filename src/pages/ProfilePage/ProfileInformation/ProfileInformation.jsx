import React, { useEffect } from 'react';
import Styles from './ProfileInformation.module.scss'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { getUserInformation, patchUserInformation, updateToken } from '../../../utils/api'
import { getCookie, setCookie } from '../../../utils/cookie';

const ProfileInformation = () => {
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

    const [isFocused, setFocused] = React.useState(false)

    const handleUpdateToken = () => {
        updateToken(getCookie('refreshToken'))
            .then(res => {
                if (res.success) {
                    setCookie('accessToken', res.accessToken)
                    setCookie('refreshToken', res.refreshToken)
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const onFocus = () => {
        if (!isFocused) {
            setFocused(true)
        }
    }

    const onBlur = () => {
        if (isFocused) {
            setFocused(false)
        }
    }

    useEffect(() => {
        isFocused ? console.log('ВИДИМ КНОПКИ') : console.log('НЕ ВИДИМ КНОПКИ')
    }, [isFocused]);

    useEffect(() => {
        getUserInformation(getCookie('accessToken'))
            .then((res) => setnameValue(res.user.name))
            .catch((error) => {
                console.log(error);
                handleUpdateToken()
            })
        getUserInformation(getCookie('accessToken'))
            .then((res) => setValue(res.user.email))
            .catch((error) => {
                console.log(error);
                handleUpdateToken()
            })
    }, [])


    const handleAccept = () => {
        let newObj = {};
        newObj.name = nameValue;
        newObj.email = value;
        console.log(newObj)
        patchUserInformation(getCookie('accessToken'), newObj)
            .then((res) => console.log(res));
    }

    return (
        <div className={Styles.content}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setnameValue(e.target.value)}
                value={nameValue}
                name={'name'}
                error={false}
                icon="EditIcon"
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
                extraClass="mb-6"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <PasswordInput
                onChange={onChangePassword}
                placeholder={'Пароль'}
                name={'password'}
                extraClass="mb-6"
                icon="EditIcon"
                value={passwordValue}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <div className={Styles.buttons}>
                <Button htmlType="button" type="secondary" size="medium" extraClass='mr-4'>
                    Отмена
                </Button>
                <Button htmlType="button" type="primary" size="medium" onClick={handleAccept}>
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

export default ProfileInformation;