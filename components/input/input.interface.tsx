import { ReactNode, ChangeEvent } from 'react';

type InputType = 'text' | 'email' | 'password';

export interface InputComponentProps {
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    type?: InputType;
    value?: string;
    autocomplete?: 'on' | 'off';
    maxLength?: number;
    className?: string;
    readonly?: boolean;
    onKeyUp?: () => void;
    label?: string;
    icon?: ReactNode;
    withIcon?: boolean;
}
