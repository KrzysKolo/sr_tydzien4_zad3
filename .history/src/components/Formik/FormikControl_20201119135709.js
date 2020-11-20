import Input from './../FormComponents/Input';
import Radio from './../FormComponents/Radio';
import TextArea from './../FormComponents/TextArea';
import Checkbox from './../FormComponents/Checkbox';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'radio': return <Radio {...rest} />
        case 'textarea': return <TextArea {...rest} />
        case 'checkbox': return <Checkbox {...rest} />
        default: return null
    }
}

export default FormikControl;