/**
 * Filename: button.component.tsx\
 * Description: This is the button component file.\
 * Extentia: Copyright (c) 2022
 */

import { FC, ReactElement } from 'react';
import { IButtonProps } from './button.interface';

/**
 * @exports
 * @function ButtonComponent
 * @returns {ReactElement}
 */

const ButtonComponent: FC<IButtonProps> = ({
    children,
    disabled,
    onClick,
    type,
    className,
}): ReactElement => {
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type || 'button'} className={className} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonComponent;
