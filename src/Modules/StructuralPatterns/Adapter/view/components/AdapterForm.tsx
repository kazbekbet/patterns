import React, { FormEvent } from 'react';
import { Label1 } from 'baseui/typography';
import { Card } from 'baseui/card';
import { Button, KIND } from 'baseui/button';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';

interface OwnProps {
    login: string;
    password: string;
    onLoginChange: (e: string) => void;
    onPasswordChange: (e: string) => void;
    signInActionNormal: () => void;
    signInActionAdapt: () => void;
}

export const AdapterForm: React.FC<OwnProps> = props => {
    const { login, password, onLoginChange, onPasswordChange, signInActionNormal, signInActionAdapt } = props;
    const [css] = useStyletron();
    const inputStyles = css({ margin: '1rem 0 1rem 0' });

    const handleSignInNormal = (e: React.MouseEvent | FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInActionNormal();
    };

    const handleSignInAdapt = (e: React.MouseEvent) => {
        e.preventDefault();
        signInActionAdapt();
    };

    return (
        <Card title='Авторизация'>
            <form noValidate autoComplete='off' onSubmit={handleSignInNormal}>
                <div className={inputStyles}>
                    <Input
                        value={login}
                        onChange={event => onLoginChange(event.currentTarget.value)}
                        placeholder='Введите логин'
                    />
                </div>
                <div className={inputStyles}>
                    <Input
                        type='password'
                        value={password}
                        onChange={event => onPasswordChange(event.currentTarget.value)}
                        placeholder='Введите пароль'
                    />
                </div>
                <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
                    <Button onClick={handleSignInNormal} disabled={login.length < 1 || password.length < 1}>
                        Войти по старому методу
                    </Button>
                    <Button
                        kind={KIND.secondary}
                        onClick={handleSignInAdapt}
                        disabled={login.length < 1 || password.length < 1}
                    >
                        Войти по новому методу
                    </Button>
                </div>
            </form>
        </Card>
    );
};
