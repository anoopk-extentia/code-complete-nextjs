/**
 * Filename: useTypedSelector.hook.tsx
 * Description: This hook is used to extract data from redux global store
 * Extentia: Copyright (c) 2022
 */

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'store/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
