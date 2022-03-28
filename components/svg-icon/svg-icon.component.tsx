/**
 * FileName: svg-icon.component.tsx
 * Description: This file contains svg icon component.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import * as Icons from 'public/static/svg';
import { ISvgIconComponent } from './svg-icon.interface';

const SvgIconComponent: FC<ISvgIconComponent> = ({ icon, ...props }): JSX.Element => {
    const Icon = Icons[icon];
    return <Icon aria-hidden="true" {...props} />;
};

export default SvgIconComponent;
