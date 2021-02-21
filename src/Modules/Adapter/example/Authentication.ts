/**
 * Целевой класс авторизации пользователя в системе.
 * */
export class Authentication {
    constructor(private login: string, private password: string) {}

    /**
     * Метод авторизации в систему, проверяющий корректность данных.
     * */
    public signIn() {
        const separatedLogin = this.login.split('_');
        const loginPrefix = separatedLogin[0];

        if (loginPrefix && loginPrefix === 'legacy') {
            alert(`Пользователь ${this.login} успешно авторизован!`);
            return { login: this.login, password: this.password };
        } else {
            alert(`Проверьте корректность вводимых данных ${this.login}`);
            return { login: null, password: null };
        }
    }
}
