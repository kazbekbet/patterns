/**
 * Модель пользовательских данных.
 *
 * @prop {string} login - Логин.
 * @prop {string} password - Пароль.
 * */
export interface UserData {
    login: string;
    password: string;
}

/**
 * Целевой класс авторизации пользователя в системе.
 * */
export class Authentication implements UserData {
    constructor(public readonly login: string, public readonly password: string) {}

    /**
     * Метод авторизации в систему, проверяющий корректность данных.
     * */
    public signIn() {
        const [loginPrefix] = this.login.split('_');

        if (loginPrefix && loginPrefix === 'legacy') {
            alert(`Пользователь ${this.login} успешно авторизован!`);
            return { login: this.login, password: this.password };
        } else {
            alert(`Проверьте корректность вводимых данных ${this.login}`);
            return { login: null, password: null };
        }
    }
}
