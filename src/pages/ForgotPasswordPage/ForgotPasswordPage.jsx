import React from 'react';
import Styles from './ForgotPasswordPage.module.scss'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { postEmailRequest } from '../../utils/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ForgotPasswordPage = () => {
    const navigate = useNavigate(); 
    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }


    const handleRestore = () => {
        postEmailRequest(value)
        .then(res => {
            if (res.success) {
                 navigate("/reset-password");
            }
        })
    }

    const handleReset = () => {
        
    }

    return (
        <div className={Styles.content}>
            <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
            <EmailInput
                onChange={onChange}
                placeholder='Укажите e-mail'
                value={value}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20' onClick={handleRestore}>
                Восстановление пароля
            </Button>
            <p className="text text_type_main-default text_color_inactive">
                Вспомнили пароль? <Link to='/login' className={`text text_type_main-default ${Styles.link}`}>Войти</Link>
            </p>
        </div>
    );
};

export default ForgotPasswordPage;