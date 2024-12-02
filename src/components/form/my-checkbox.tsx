import { Check } from '@phosphor-icons/react';
import { ReactNode } from 'react';
import {Checkbox, CheckboxProps } from 'react-aria-components';
import './my-checkbox.css';

interface MyCheckboxProps extends CheckboxProps {
    children: ReactNode,
}
function MyCheckbox({ children, ...props } : MyCheckboxProps) {
    return (
        <Checkbox {...props} className="my-checkbox-Checkbox">
            <div className="my-checkbox-Box">
                <Check weight="bold" className="w-full h-full" />
            </div>
            {children}
        </Checkbox>
    )
}

export default MyCheckbox;