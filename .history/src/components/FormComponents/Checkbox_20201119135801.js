import React from 'react';
import{ Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Checkbox = (props) => {
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <div className="row">
                <Field type='checkbox' id={name} name="statute" {...rest}/>
                <label htmlFor={name}>{label}</label>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
     );
}

export default Checkbox;