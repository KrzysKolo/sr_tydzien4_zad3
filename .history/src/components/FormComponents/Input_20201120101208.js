import React from 'react';
import{ Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = (props) => {
    const { label, name, ...rest } = props;
    return (

        <section className="form-control section">
             <label htmlFor={name}>{label}</label>
            <Field className={ErrorMessage ? "has-error" : "" } id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </section>
     );
}

export default Input;