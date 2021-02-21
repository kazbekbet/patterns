import React from 'react';
import { Routing } from './Router/Routing';
import { ResponsiveDrawer } from './Common/Components/Drawer/ResponsiveDrawer';
import './Common/styles.scss';

export const App = () => <Routing DrawerComponent={ResponsiveDrawer} />;
