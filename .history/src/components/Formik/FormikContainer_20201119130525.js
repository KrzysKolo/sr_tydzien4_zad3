import React from 'react';
import { Formik, Form, validateYupSchema } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const initialValue = {
        name: '',
        email: '',
    }

    const validationSchema = yup.object({
        name: yup.string().required("Imię jest obowiązkowe!").min(2,"Twóje imię musi mieć więcej niż 2 znaki!").max(30,'Twoje imię może mieć maxymalnie 30 znaków!'),
        email: yup.string().required("Email jest wymagany").email("Adres zawiera błędy"),
    });

    const onSubmit = values => console.log('Form data: ', values);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { ({formik, values, errors}) => (
                <Form>
                    <section className="section">
                    <FormikControl control='input' type='text' label='Name' name='name'/>
                        <FormikControl control='input' type='email' label='Email' name='email'/>
                    </section>
                    <button type="submit">Wyślij</button>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                        {JSON.stringify(errors, null, 2)}
                    </pre>
                </Form>
            )

            }

        </Formik>
    )
}