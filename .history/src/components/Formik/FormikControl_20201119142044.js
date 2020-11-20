import { Input, Radio, Checkbox, TextArea } from './../FormComponents/index';


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