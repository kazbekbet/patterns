import { Adapter } from '../Adapter';

describe('Тестирование адаптера', () => {
    const LEGACY_LOGIN = 'legacy_312';
    const NEW_LOGIN = 'new_312';
    const WRONG_LOGIN = 'incorrect-login';
    const PASSWORD = 'password';

    test('Должно вернуть нормальные данные для устаревшего логина.', () => {
        const legacyUserData = new Adapter(LEGACY_LOGIN, PASSWORD);
        expect(legacyUserData.checkAndTransformLogin()).toEqual({ login: LEGACY_LOGIN, password: PASSWORD });
    });

    test('Должно вернуть трансформированные данные из нового логина в устаревший', () => {
        const newUserData = new Adapter(NEW_LOGIN, PASSWORD);
        expect(newUserData.checkAndTransformLogin()).toEqual({ login: LEGACY_LOGIN, password: PASSWORD });
    });

    test('Должно вернуть null в полях пользовательских данных', () => {
        const wrongUserData = new Adapter(WRONG_LOGIN, PASSWORD);
        expect(wrongUserData.checkAndTransformLogin()).toEqual({ login: null, password: null });
    });
});
