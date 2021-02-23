import { Authentication } from '../Authentication';

describe('Тестирование класса авторизации.', () => {
    const NORMAL_LOGIN = 'legacy_312';
    const PASSWORD = 'password';
    const WRONG_LOGIN = 'incorrect-login';

    test('Должно вернуть нормальные данные.', () => {
        const normalUserData = new Authentication(NORMAL_LOGIN, PASSWORD);
        expect(normalUserData.signIn()).toEqual({login: NORMAL_LOGIN, password: PASSWORD});
    });

    test('Должно вернуть null в данных пользователя.', () => {
        const wrongUserData = new Authentication(WRONG_LOGIN, PASSWORD);
        expect(wrongUserData.signIn()).toEqual({login: null, password: null});
    });
});
