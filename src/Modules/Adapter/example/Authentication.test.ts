import { Authentication } from './Authentication';

describe('Тестирование класса авторизации', () => {
    const NORMAL_LOGIN = 'legacy_312';
    const PASSWORD = 'password';
    const WRONG_LOGIN = 'incorrect-login';

    test('Тестирование ввода нормальный данных', () => {
        const normalUserData = new Authentication(NORMAL_LOGIN, PASSWORD);
        expect(normalUserData.signIn()).toEqual({login: NORMAL_LOGIN, password: PASSWORD});
    });

    test('Тестирование ввода некорректных данных', () => {
        const wrongUserData = new Authentication(WRONG_LOGIN, PASSWORD);
        expect(wrongUserData.signIn()).toEqual({login: null, password: null});
    });
});
