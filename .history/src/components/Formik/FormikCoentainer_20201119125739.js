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
        name: yup.string().("Imię jest obowiązkowe!").min(2,"Twóje imię musi mieć więcej niż 2 znaki!").max(30,'Twoje imię może mieć maxymalnie 30 znaków!'),
        email: Yup.string().required("Email jest wymagany").email("Adres zawiera błędy"),
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
                        <FormikControl />
                    </section>
                </Form>
            )

            }

        </Formik>
    )
}