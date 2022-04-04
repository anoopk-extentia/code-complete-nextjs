/**

 * FileName:dropdown.component.tsx
 * Description: This file contains app sidebar component.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import { IDropDownComponent } from './dropdown.interface';

const DropDownComponent: FC<IDropDownComponent> = ({ label }): JSX.Element => {
    return (
        <>
            <label className="text-[#5C5C5C] dark:text-white text-sm">{label}</label>
            <select className="p-2 text-sm bg-transparent border-0 focus:outline-none text-orange-default">
                <option value="1">Oncology</option>
                <option value="2">Oncology</option>
                <option value="3">Oncology</option>
            </select>
        </>
    );
};

export default DropDownComponent;
