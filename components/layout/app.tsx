import React from 'react';
import Shell from '@/components/layout/shell';

function App({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <Shell title={title}>
            {children}
        </Shell>
    );
}

export default App;
