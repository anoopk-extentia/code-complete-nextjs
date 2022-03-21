/**
 * Filename: button.interface.ts\
 * Description: This is the interface file for the button component.\
 * Extentia: Copyright (c) 2022
 */

import { ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

/**
 * @types ButtonType
 * @description the type is for button
 */

export interface IButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick: () => void;
    type?: ButtonType;
    className?: string;
}
/**
 * @exports
 * @interface IButtonProps
 * @description the interface for button props
 */
