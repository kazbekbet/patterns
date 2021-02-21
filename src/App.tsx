import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';
import { Routing } from './Router/Routing';
import { ResponsiveDrawer } from './Common/Components/Drawer/ResponsiveDrawer';
import './Common/styles.scss';

const engine = new Styletron();

export const App = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Routing DrawerComponent={ResponsiveDrawer} />
            </BaseProvider>
        </StyletronProvider>
    );
};
