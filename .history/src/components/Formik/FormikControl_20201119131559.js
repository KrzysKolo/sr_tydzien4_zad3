import Input from './../FormComponents/Input';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'radio': return <Radio {...rest} />
        default: return null
    }
}

export default FormikControl;