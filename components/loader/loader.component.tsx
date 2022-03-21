/**
 * Filename: loader.component.tsx\
 * Description: This is the loader component file.\
 * Extentia: Copyright (c) 2022
 */

import { FC, ReactElement } from 'react';
import { TestIdConstant } from 'common/test-id.constants';
import { ILoaderProps } from './loader.interface';
import { useTypedSelector } from 'hooks/useTypedSelector';

/**
 * @exports
 * @function LoaderComponent
 * @returns {ReactElement}
 */

const LoaderComponent: FC<ILoaderProps> = (): ReactElement | null => {
    const { isActive, label } = useTypedSelector(({ loader }) => loader);

    if (!isActive) return null;
    return isActive && <div data-testid={TestIdConstant.LOADER_ID}>{label}</div>;
};

export default LoaderComponent;
