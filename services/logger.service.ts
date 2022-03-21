/* eslint-disable no-console */
/**
 * Filename: logger.service.ts
 * Description: This is the logger services file.
 * Extentia: Copyright (c) 2022
 */

/**
 * @exports
 * @class LoggerService
 * @component
 */

let isEnabled = false;

const enableLogging = (): void => {
    isEnabled = true;
};

const disableLogging = (): void => {
    isEnabled = false;
};

const log = <T>(...data: T[]): void => {
    if (isEnabled) {
        console.log(data);
    }
};

const error = <T>(...error: T[]): void => {
    if (isEnabled) {
        console.log(error);
    }
};

const warn = <T>(...data: T[]): void => {
    if (isEnabled) {
        console.log(data);
    }
};

const LoggerService = { enableLogging, disableLogging, log, error, warn };

export { LoggerService };
