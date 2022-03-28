import { FC } from 'react';
import { InputComponentProps } from './input.interface';

const InputComponent: FC<InputComponentProps> = ({
    name,
    id,
    value,
    type = 'text',
    autocomplete,
    maxLength,
    className = '',
    placeholder,
    readonly,
    onKeyUp,
    onChange,
    disabled,
    withIcon,
    icon,
    ...props
}): JSX.Element => {
    const input = (
        <>
            <input
                disabled={disabled}
                className={`w-full pl-4  pr-8 py-4 text-gray-900 border bg-light-mode rounded-lg dark:border-gray-600 dark:bg-dark-mode text-light-mode-text dark:text-dark-mode-text focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-gray-700  ${className}`}
                type={type || 'text'}
                name={name}
                id={id}
                value={value}
                autoComplete={autocomplete}
                maxLength={maxLength}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={onChange}
                onKeyUp={onKeyUp}
                {...props}
            />
        </>
    );
    return (
        <>
            {withIcon ? (
                <div className="relative flex items-center">
                    <div className="absolute right-0 pr-3 pointer-events-none">{icon}</div>
                    {input}
                </div>
            ) : (
                input
            )}
        </>
    );
};

export default InputComponent;

{
    /* <label
htmlFor={id}
className="text-sm font-bold text-gray-600 capitalize dark:text-dark-mode-text"
>
{label}
</label> */
}
