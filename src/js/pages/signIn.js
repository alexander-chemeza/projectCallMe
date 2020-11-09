export default class SignIn {
    constructor() {
    }

    render() {
        const content = `
        <div class="form-field">
            <div class="row">
                <h2 class="form__header">Войти</h2>
            </div>
            <div class="row">
                <input type="email" placeholder="Введите адрес электронной почты">
            </div>
            <div class="row">
                <input type="password" placeholder="Введите пароль">
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-success">Войти</button>
                </div>
                <div class="col">
                    <button class="btn btn-danger">Отменить</button>
                </div>
            </div>
        </div>
        `

        return content
    }
}