/**
 * Класс адаптер, трансформирующий данные пользователя по старому методу.
 * */
import { UserData } from './Authentication';

export class Adapter implements UserData {
    constructor(public login: string, public password: string) {}

    /**
     * Метод, проверяющий корректность префикса и трансформирующий его в legacy.
     * */
    public checkAndTransformLogin() {
        const separatedLogin = this.login.split('_');
        const loginPrefix = separatedLogin[0];

        if (loginPrefix) {
            switch (loginPrefix) {
                case 'new':
                    return {
                        login: `legacy_${separatedLogin[1]}`,
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
     * Метод обработки ошибок, если совпадение по префиксу не найдено.
     * */
    private userNotFound() {
        alert(`Проверьте корректность вводимых данных ${this.login}`);
        return { login: null, password: null };
    }
}
