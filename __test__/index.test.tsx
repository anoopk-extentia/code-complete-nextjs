/**
 * Filename: index.test.tsx \
 * Description: This is the index page test case file.\
 * Extentia: Copyright (c) 2022
 */

import { createRenderer } from 'react-test-renderer/shallow';
import { cleanup } from '@testing-library/react';
import Home from 'pages';

const renderer = createRenderer();

afterEach(cleanup);

describe('Home Page', () => {
    it('should render home page', () => {
        renderer.render(<Home />);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
