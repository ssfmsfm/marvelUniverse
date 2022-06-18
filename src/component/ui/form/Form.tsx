import React, { useState } from 'react';
import FormTextField from '../formTextField/FormTextField';

import "./Form.scss";

type FormProps = {
    title?: string,
    loading?: boolean,
    children: React.ReactNode,
}

const Form: React.FC<FormProps> = ({title, loading, children}) => {

    return (

        <form className="form-container" action="">
            {title &&
                <div className="header">{title}</div>
            }
            {children}
            {loading && <div className="loader"></div>}
        </form>
    )
}

export default Form;