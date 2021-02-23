import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';
import { Routing } from './Router/Routing';
import { NavigationBar } from './Common/Components/NavigationBar/NavigationBar';

const engine = new Styletron();

export const App = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Routing DrawerComponent={NavigationBar} />
            </BaseProvider>
        </StyletronProvider>
    );
};
