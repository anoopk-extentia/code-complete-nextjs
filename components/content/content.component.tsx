import { FC } from 'react';
import { IContentProps } from './content.interface';

const cls = {
    main: 'h-full overflow-y-auto ml-[80px] h-[calc(100%-7.7rem)]',
    mainWrapper: 'container mx-10 mt-[30px]',
};

const Content: FC<IContentProps> = ({ children }) => (
    <main className={cls.main}>
        <div className={cls.mainWrapper}>{children}</div>
    </main>
);

export default Content;
