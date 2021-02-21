import React from 'react';
import { Routing } from './Router/Routing';
import { ResponsiveDrawer } from './Common/Components/Drawer/ResponsiveDrawer';

export const App = () => <Routing DrawerComponent={ResponsiveDrawer} />;
