import React from 'react';
import "./Form.scss";
import Input from '../../Input/Input';
import useForm from '../../../../Hooks/useForm';
import { useDispatch } from "react-redux"
import { loginUser } from '../../../../Store/actions/user';
import { validateEmail } from '../helper';
import SocialTools from '../../SocialTools/SocialTools';


const Form = ({ setMessage }) => {
    const dispatch = useDispatch()
    const baseUrl = window.location.origin


    const { value: email,
        isValid: emailIsValid,
        // hasError: emailHasError,
        onValueChange: onEmailChange,
        // onValueBlur: onEmailBlur
    } = useForm(validateEmail)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (emailIsValid) {
            dispatch(loginUser({ email, baseUrl }))
            setMessage(true)
        }
    }

    return (
        <div className='login-wrapper'>
            <h4 className='title'>Daxil ol</h4>
            <SocialTools />
            <span className='or'>
                və ya
            </span>
            <form onSubmit={onSubmitHandler} className='login-form '>
                <Input
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'nümunə@gmail.com'}
                    onChange={onEmailChange}
                    type="text"
                    value={email}
                />
                <button type='submit' className="login-btn">
                    Daxil ol
                </button>
            </form>
        </div>
    )
}

export default Form