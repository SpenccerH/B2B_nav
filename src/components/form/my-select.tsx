import { Button, Label, ListBox, Popover, Select, SelectProps, SelectValue, ValidationResult } from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';
import './my-select.css';
import {CaretDown} from '@phosphor-icons/react';
import {ReactNode} from 'react';

interface MySelectProps<T extends object>
    extends Omit<SelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: ReactNode | ((item: T) => ReactNode);
}

export function MySelect<T extends object>(
    { label, description, errorMessage, children, items, className, onSelectionChange, ...props }:
        MySelectProps<T>
) {
    return (
        <Select {...props} onSelectionChange={onSelectionChange} className={`${className} my-select-Select`}>
            <Label className="my-select-Label">{label}</Label>
            <Button className="my-select-Button focus:outline-none">
                <SelectValue className="flex flex-col">
                    {({defaultChildren, isPlaceholder}) => {
                        return isPlaceholder ? <span className="text-slate-gray"> - Select an item -</span> : defaultChildren;
                    }}
                </SelectValue>
                <span aria-hidden="true"><CaretDown weight="bold" className="w-full h-full"/></span>
            </Button>
            {description && <Text slot="description">{description}</Text>}
            <FieldError>{errorMessage}</FieldError>
            <Popover>
                <ListBox className="my-select-ListBox" items={items}>
                    {children}
                </ListBox>
            </Popover>
        </Select>
    );
}

export default MySelect;