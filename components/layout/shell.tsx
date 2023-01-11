import React from 'react';
import Head from 'next/head';
import { AppShell } from '@mantine/core';
import Header from '@/components/layout/elements/Header';

export default function Shell({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>{title ? `${title} - Twibber` : 'Twibber'}</title>
            </Head>

            <AppShell
              padding="md"
              header={<Header />}
              styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                {children}
            </AppShell>
        </>
    );
}
