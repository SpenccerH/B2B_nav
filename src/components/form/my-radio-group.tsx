import {FieldError, Label, RadioGroup, RadioGroupProps, ValidationResult, Text } from 'react-aria-components';
import {ReactNode} from 'react';

interface MyRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
    children?: ReactNode,
    label?: string,
    description?: string,
    errorMessage?: string | ((validation: ValidationResult) => string)
}

function MyRadioGroup({label, description, children, errorMessage, ...props} : MyRadioGroupProps) {
    return (
        <RadioGroup {...props}>
            <Label>{label}</Label>
            {children}
            {description && <Text slot="description">{description}</Text>}
            <FieldError>{errorMessage}</FieldError>
        </RadioGroup>
    )
}

export default MyRadioGroup;