import Input from './../FormComponents/Input';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest} />
        default: return null
    }
}

export default FormikControl;