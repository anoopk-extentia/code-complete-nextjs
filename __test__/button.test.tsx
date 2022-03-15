/**
 * Filename: button.test.tsx \
 * Description: This is the button test case file.\
 * Extentia: Copyright (c) 2022
 */

import { createRenderer } from 'react-test-renderer/shallow';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ButtonComponent } from 'components';
import { MockConstants } from '__mock__/mock.constants';
import { LoggerService } from 'services/logger.service';

afterEach(cleanup);

const renderer = createRenderer();

describe('button.test.tsx', () => {
    it('Button rendered correctly', () => {
        renderer.render(
            <ButtonComponent onClick={() => LoggerService.log('test button clicked')}>
                {MockConstants.TEXT_BUTTON}
            </ButtonComponent>,
        );
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });

    it('Button Clicked successfully', () => {
        const handleClickMock = jest.fn();
        const { container } = render(
            <ButtonComponent onClick={handleClickMock}>
                {MockConstants.TEXT_BUTTON}
            </ButtonComponent>,
        );
        fireEvent.click(container.firstChild!);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
});
