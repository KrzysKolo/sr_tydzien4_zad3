import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';
import RadioOptions from './../../data/RadioOptions';

const FormikContainer = () => {
    const initialValues = {
        name: '',
        email: '',
        sex: '',
        description: '',
    }

    const validationSchema = yup.object({
        name: yup.string().required("Imię jest obowiązkowe!").min(2,"Twóje imię musi mieć więcej niż 2 znaki!").max(30,'Twoje imię może mieć maxymalnie 30 znaków!'),
        email: yup.string().required("Email jest wymagany").email("Adres zawiera błędy"),
        sex: yup.string().required('Zaznacz jedną wartość'),
        description: yup.string().required('Wpisz kilka słów').min(2, "Wpisz co najmniej 2 znaki").max(250, "Możesz wpisać max. 250 znaków"),
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
                        <FormikControl control='radio' label='Wybierz płeć: ' name='sex' options={RadioOptions}/>
                    </section>
                    <section className="section">
                        <FormikControl control='textarea' label='Description' name='description'/>
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
