/**
 * Целевой класс авторизации пользователя в системе.
 * */
export class Authentication {
    constructor(private login: string, private password: string) {}

    /**
     * Метод авторизации в систему, проверяющий корректность данных.
     * */
    public signIn() {
        if (this.login.split('_')[0] === 'legacy') {
            alert(`Пользователь ${this.login} успешно авторизован!`);
        } else alert(`Проверьте корректность вводимых данных ${this.login}`);
    }
}
