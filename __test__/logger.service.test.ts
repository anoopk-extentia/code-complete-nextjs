/**
 * Filename: logger.service.test.tsx \
 * Description: This is the logger service test case file.\
 * Extentia: Copyright (c) 2022
 */

import { LoggerService } from 'services/logger.service';
import { MockConstants } from '__mock__/mock.constants';

describe('logger service', () => {
    it('invokes the logger service"s enable Logging ', () => {
        expect(LoggerService.enableLogging()).toBe(undefined);
    });

    it('invokes the logger service"s disable Logging ', () => {
        expect(LoggerService.disableLogging()).toBe(undefined);
    });
    it('invokes the log method', () => {
        LoggerService.disableLogging();
        expect(LoggerService.log(MockConstants.DATA)).toBe(undefined);
        LoggerService.enableLogging();
        expect(LoggerService.log(MockConstants.DATA)).toBe(undefined);
    });

    it('invokes the error logging method', () => {
        LoggerService.disableLogging();
        expect(LoggerService.error(MockConstants.DATA)).toBe(undefined);
        LoggerService.enableLogging();
        expect(LoggerService.error(MockConstants.DATA)).toBe(undefined);
    });
    it('invokes the error logging method', () => {
        LoggerService.disableLogging();
        expect(LoggerService.warn(MockConstants.DATA)).toBe(undefined);
        LoggerService.enableLogging();
        expect(LoggerService.warn(MockConstants.DATA)).toBe(undefined);
    });
});
