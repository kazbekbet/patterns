import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as PATH from './paths';
import { AdapterComponent } from './lazyImports';
import { SpinnerDefault } from '../Common/Components/Spinners/SpinnerDefault';

/**
 * Стандартная конфигурация роутинга в приложении.
 * */
export const Routing = () => (
    <Suspense fallback={<SpinnerDefault />}>
        <Router>
            <Switch>
                <Route path={PATH.ADAPTER}>
                    <AdapterComponent />
                </Route>
                <Redirect to={PATH.ADAPTER} />
            </Switch>
        </Router>
    </Suspense>
);
