import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { PATH } from './paths';
import * as lazy from './lazyImports';
import { SpinnerDefault } from '../Common/Components/Spinners/SpinnerDefault';
import { DrawerOwnProps } from '../Common/Components/Drawer/model';

/**
 * Собственные свойства компонента.
 *
 * @prop {React.FC} DrawerComponent - Dependency Injection навигационного меню приложения.
 * */
interface OwnProps {
    DrawerComponent: React.FC<DrawerOwnProps>;
}

/**
 * Стандартная конфигурация роутинга в приложении.
 * */
export const Routing: React.FC<OwnProps> = ({ DrawerComponent }) => (
    <Suspense fallback={<SpinnerDefault />}>
        <Router>
            <DrawerComponent>
                <Switch>
                    <Route path={PATH.MAIN_PAGE} component={lazy.MainComponent} exact />
                    <Route path={PATH.ADAPTER} component={lazy.AdapterComponent} exact />
                    <Redirect to={PATH.MAIN_PAGE} />
                </Switch>
            </DrawerComponent>
        </Router>
    </Suspense>
);
