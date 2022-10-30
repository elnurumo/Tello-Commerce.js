import React from 'react';
import "./_Register.scss";
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import Form from './Form/From';


const Register = () => {
    return (
        <div className='registerA'>
            <div className="container">
                <div className="register-content">
                    <Form />
                    <ImageWrapper
                        question={"Artıq hesabınız var?"}
                        message={"Daxil olun"}
                        link={'/login'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register