import { UserData } from './Authentication';

/**
 * Класс адаптер, трансформирующий данные пользователя по старому методу.
 * */
export class Adapter implements UserData {
    constructor(public readonly login: string, public readonly password: string) {}

    /**
     * Метод, проверяющий корректность префикса и трансформирующий его в legacy.
     * */
    public checkAndTransformLogin() {
        const { prefix, id } = this.getSeparatedLogin();

        if (prefix) {
            switch (prefix) {
                case 'new':
                    return {
                        login: `legacy_${id}`,
                        password: this.password,
                    };
                case 'legacy':
                    return {
                        login: this.login,
                        password: this.password,
                    };
                default:
                    return this.userNotFound();
            }
        } else return this.userNotFound();
    }

    /**
     * Разделение данных логина.
     * */
    private getSeparatedLogin() {
        const [loginPrefix, pureId] = this.login.split('_');

        return { prefix: loginPrefix, id: pureId };
    }

    /**
     * Метод обработки ошибок, если совпадение по префиксу не найдено.
     * */
    private userNotFound() {
        alert(`Проверьте корректность вводимых данных ${this.login}`);
        return { login: null, password: null };
    }
}
