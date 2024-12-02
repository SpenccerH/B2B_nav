import './my-text-field.css';
import {FieldError, Input, Label, TextField, TextFieldProps, ValidationResult, Text} from 'react-aria-components';

interface MyTextFieldProps extends TextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyTextField({ label, description, errorMessage, className } : MyTextFieldProps) {
    return (
        <>
            <TextField className={`${className} my-text-field-TextField`}>
                <Label className="my-text-field-Label">{label}</Label>
                <Input className="my-text-field-Input focus:outline-none"/>
                {description && <Text slot="description">{description}</Text>}
                <FieldError className="my-text-field-FieldError">{errorMessage}</FieldError>
            </TextField>
        </>
    )
}

export default MyTextField;