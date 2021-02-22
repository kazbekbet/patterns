import React, { useState } from 'react';
import { H3 } from 'baseui/typography';
import { Cell, Grid } from 'baseui/layout-grid';

import { AdapterForm } from './components/AdapterForm';
import { Authentication } from '../example/Authentication';
import { Adapter } from '../example/Adapter';

/**
 * Страница паттерна "Адаптер".
 * */
const AdapterPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignInNormal = () => {
        const normalAuth = new Authentication(login, password);
        normalAuth.signIn();
    };

    const handleSignInAdapt = () => {
        const adaptUserData = new Adapter(login, password).checkAndTransformLogin();
        if (adaptUserData.login && adaptUserData.password) {
            const adaptAuth = new Authentication(adaptUserData.login, adaptUserData.password);
            adaptAuth.signIn();
        }
    };

    return (
        <Grid>
            <Cell span={12}>
                <H3>Паттерн "Адаптер"</H3>
            </Cell>
            <Cell span={[12, 8, 6, 4]}>
                <AdapterForm
                    login={login}
                    password={password}
                    onLoginChange={value => setLogin(value)}
                    onPasswordChange={value => setPassword(value)}
                    signInActionNormal={handleSignInNormal}
                    signInActionAdapt={handleSignInAdapt}
                />
            </Cell>
        </Grid>
    );
};

export default AdapterPage;
