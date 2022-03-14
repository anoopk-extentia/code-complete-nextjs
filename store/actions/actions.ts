/**
 * Filename: actions.ts\
 * Description: This is the action file\
 * Extentia: Copyright (c) 2022
 */
import { ILoaderAction } from 'store/store.interface';
import { SHOW_LOADER, HIDE_LOADER } from './action-types';

/**
 * @exports
 * @param {string} label
 * @returns LoaderAction
 */
export const show = (label?: string): ILoaderAction => ({
    type: SHOW_LOADER,
    label: label ?? '',
});

/**
 * @exports
 * @returns ILoaderAction
 */
export const hide = (): ILoaderAction => ({
    type: HIDE_LOADER,
});
