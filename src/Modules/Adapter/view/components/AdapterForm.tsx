import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { HeadingText } from '../../../../Common/Components/Typography/HeadingText';

interface OwnProps {
    login: string;
    password: string;
    onLoginChange: (e: string) => void;
    onPasswordChange: (e: string) => void;
    signInActionNormal: () => void;
    signInActionAdapt: () => void;
}

export const AdapterForm: React.FC<OwnProps> = ({ login, password, onLoginChange, onPasswordChange, signInActionNormal, signInActionAdapt }) => {
    return (
        <Paper className='paper-container'>
            <form noValidate autoComplete='off'>
                <HeadingText type={'ELEMENT_TITLE'} color={'primary'}>
                    Авторизация
                </HeadingText>
                <div className='text-input'>
                    <TextField
                        fullWidth
                        value={login}
                        id='login'
                        label='Логин'
                        variant='outlined'
                        onChange={e => onLoginChange(e.target.value)}
                    />
                </div>
                <div className='text-input'>
                    <TextField
                        fullWidth
                        value={password}
                        id='password'
                        label='Пароль'
                        variant='outlined'
                        onChange={e => onPasswordChange(e.target.value)}
                    />
                </div>
                <div className='form-actions'>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={signInActionNormal}
                        disabled={login.length < 1 || password.length < 1}
                    >
                        Войти по старому методу
                    </Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={signInActionAdapt}
                        disabled={login.length < 1 || password.length < 1}
                    >
                        Войти по новому методу
                    </Button>
                </div>
            </form>
        </Paper>
    );
};
