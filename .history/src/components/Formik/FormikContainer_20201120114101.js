import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';
import FormMessage from './../FormComponents/FormMessage';
import RadioOptions from './../../data/RadioOptions';

const FormikContainer = () => {
    const [ showMessage, setShowMessage ] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        sex: '',
        description: '',
        statute: false,
    }

    const validationSchema = yup.object({
        name: yup.string().required("Imię jest obowiązkowe!").min(2,"Twóje imię musi mieć więcej niż 2 znaki!").max(30,'Twoje imię może mieć maxymalnie 30 znaków!'),
        email: yup.string().required("Email jest wymagany!").email("Adres zawiera błędy"),
        sex: yup.string().required('Zaznacz jedną wartość!'),
        description: yup.string().required('Wpisz kilka słów!').min(2, "Wpisz co najmniej 2 znaki").max(100, "Możesz wpisać max. 250 znaków"),
        statute: yup.boolean().required().oneOf([true], 'Musisz zaznaczyć regulamin!'),
    });

    const onSubmit = (values, {resetForm}) => {
        setShowMessage(true);
        console.log("The submitted data are:  ", values);
        resetForm();

      };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { () => (
                <Form className="form-wrapper">

                    <FormikControl control='input' type='text' label='Name:' name='name' placeholder="your name"/>
                    <FormikControl control='input' type='email' label='Email:' name='email' placeholder="your email"/>
                    <FormikControl control='radio' label='Choose the gender: ' name='sex' options={RadioOptions}/>
                    <FormikControl control='textarea' label='Description:' name='description'/>
                    <FormikControl control='checkbox' label='Select the statute:' name='statute'/>
                        <div className="statute ">
                            Regulamin<br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex nulla, dignissim id fermentum a, tempus ac augue. Vestibulum egestas est mi, nec congue dui mollis vitae. Nam dictum lectus non mauris hendrerit efficitur. Donec imperdiet nec nibh et interdum. Fusce ornare consequat sapien. Pellentesque rhoncus tempor vulputate. Aliquam eu diam laoreet, tincidunt nulla ut, dignissim turpis. Aliquam est ante, luctus sed felis et, iaculis sollicitudin tellus. Cras congue tincidunt viverra. Sed vestibulum faucibus lacus, eu dictum lorem porta id. Praesent a placerat ligula. Vestibulum faucibus ornare erat, id elementum est vehicula eu. Nunc pulvinar dolor lacus. Vestibulum dapibus efficitur orci, ac rhoncus augue auctor ut.</p>
                        </div>
                    <section className="section">
                         <button className="btn-send" type="submit">Wyślij</button>
                    </section>
                   { showMessage && <FormMessage message="Thank you for filling up the form!"/>}
                </Form>

            )

            }

        </Formik>
    )
}
export default FormikContainer;
