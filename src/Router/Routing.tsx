import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as PATH from './paths';
import * as lazy from './lazyImports';
import { SpinnerDefault } from '../Common/Components/Spinners/SpinnerDefault';

/**
 * Стандартная конфигурация роутинга в приложении.
 * */
export const Routing = () => (
    <Suspense fallback={<SpinnerDefault />}>
        <Router>
            <Switch>
                <Route path={PATH.MAIN_PAGE} component={lazy.MainComponent} exact />
                <Route path={PATH.ADAPTER} component={lazy.AdapterComponent} exact />
                <Redirect to={PATH.MAIN_PAGE} />
            </Switch>
        </Router>
    </Suspense>
);
