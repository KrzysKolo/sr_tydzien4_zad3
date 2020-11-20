import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';
import RadioOptions from './../../data/RadioOptions';

const FormikContainer = () => {
    const initialValues = {
        name: '',
        email: '',
        plec: '',
        description: '',
    }

    const validationSchema = yup.object({
        name: yup.string().required("Imię jest obowiązkowe!").min(2,"Twóje imię musi mieć więcej niż 2 znaki!").max(30,'Twoje imię może mieć maxymalnie 30 znaków!'),
        email: yup.string().required("Email jest wymagany").email("Adres zawiera błędy"),
        plec: yup.string().required('Zaznacz jedną wartość'),
        description: yup.string().required('Wpisz kilka słów'),
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
                    <section className="section">
                        <FormikControl control='radio' label='Wybierz płeć: ' name='plec' options={RadioOptions}/>
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
export default FormikContainer;
