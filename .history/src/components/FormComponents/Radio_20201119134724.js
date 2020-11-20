import React from 'react';
import{ Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Radio = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <div className="row">
                <Field name={name} {...rest}>
                    {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div className="row" key={option.id} >
                                    <input type='radio' id={option.id} {...field} value={option.value} checked={field.value === option.value}/>
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            )
                        })
                    }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
     );
}

export default Radio;