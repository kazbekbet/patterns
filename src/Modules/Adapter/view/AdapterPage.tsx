import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { HeadingText } from '../../../Common/Components/Typography/HeadingText';
import { AdapterForm } from './components/AdapterForm';
import { Authentication } from '../example/Authentication';
import { Adapter } from '../example/Adapter';

/**
 * Страница паттерна "Адаптер".
 * */
const AdapterPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState('');

    const handleSignInNormal = () => {
        const normalAuth = new Authentication(login, password);
        normalAuth.signIn();
    };

    const handleSignInAdapt = () => {
        const adaptUserData = new Adapter(login, password).getUserIdFromLogin();
        if (adaptUserData.login && adaptUserData.password) {
            const adaptAuth = new Authentication(adaptUserData.login, adaptUserData.password);
            adaptAuth.signIn();
        }
    };

    return (
        <>
            <HeadingText type='PAGE_TITLE'>Паттерн "Адаптер"</HeadingText>
            <Grid container spacing={3}>
                <Grid item xs={6} lg={6} xl={4}>
                    <AdapterForm
                        login={login}
                        password={password}
                        onLoginChange={value => setLogin(value)}
                        onPasswordChange={value => setPassword(value)}
                        signInActionNormal={handleSignInNormal}
                        signInActionAdapt={handleSignInAdapt}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default AdapterPage;
