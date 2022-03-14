/**
 * Filename: store.interface.ts\
 * Description: This is the store interfaces file.\
 * Extentia: Copyright (c) 2022
 */
import { ILoaderProps } from 'components/loader/loader.interface';

/**
 * @exports
 * @interface IAppStore
 */
export interface IAppStore {
    loader: ILoaderProps;
}

/**
 * @exports
 * @interface ILoaderAction
 */
export interface ILoaderAction {
    type: string;
    label?: string;
}
