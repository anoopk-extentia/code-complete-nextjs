import { AppProps } from 'next/app';
import { useState, useEffect, FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'common/client';
import { HeaderComponent, SideBarComponent, FooterComponent, Content } from 'components';

const cls = {
    layout: 'flex h-screen bg-background-light dark:bg-background-dark text-black dark:text-default-100',
    mainWrapper: 'flex flex-col w-full',
};

type ILayoutContainerProps = AppProps;

const LayoutContainer: FC<ILayoutContainerProps> = ({ Component, pageProps }): JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div>loading...</div>;

    return (
        <div className={cls.layout}>
            <SideBarComponent isSidebarOpen={isSidebarOpen} />
            <div className={cls.mainWrapper}>
                <HeaderComponent handleIsSidebarOpen={() => setIsSidebarOpen((prev) => !prev)} />
                <ApolloProvider client={client}>
                    <Content>
                        <Component {...pageProps} />
                    </Content>
                </ApolloProvider>
            </div>
            <FooterComponent />
        </div>
    );
};

export default LayoutContainer;
