import React from 'react';
import { PATH } from '../paths/paths';
import * as lazy from '../utils/lazyImports';
import { Route } from 'react-router-dom';

/**
 * Роуты структурных паттернов.
 * */
export const StructuralRoutes = () => (
    <>
        <Route path={PATH.MAIN_STRUCTURAL} component={lazy.MainStructuralComponent} exact />
        <Route path={PATH.ADAPTER} component={lazy.AdapterComponent} exact />
        <Route path={PATH.BRIDGE} exact />
        <Route path={PATH.COMPOSITE} exact />
        <Route path={PATH.DECORATOR} exact />
        <Route path={PATH.FACADE} exact />
        <Route path={PATH.FLYWEIGHT} exact />
        <Route path={PATH.PROXY} exact />
    </>
);
