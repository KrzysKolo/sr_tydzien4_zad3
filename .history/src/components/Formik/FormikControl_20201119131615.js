import Input from './../FormComponents/Input';
import Radio from './../FormComponents/Radio';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'radio': return <Radio {...rest} />
        default: return null
    }
}

export default FormikControl;