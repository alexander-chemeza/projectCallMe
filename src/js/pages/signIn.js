export default class SignIn {
    constructor() {
    }

    render() {
        const content = `
        <form action="" method="">
        <div class="form-field">
            <div class="row">
                <h2 class="form__header">Войти</h2>
            </div>
            <div class="row">
                <input class="form-control control-input" type="email" placeholder="Введите адрес электронной почты">
            </div>
            <div class="row">
                <input class="form-control control-input" type="password" placeholder="Введите пароль">
            </div>
            <div class="row">
                <div class="col">
                    <button id="sign-in" type="submit" class="btn btn-success control-btn">Войти</button>
                </div>
                <div class="col">
                    <button id="btn-cancel" class="btn btn-danger control-btn">Отменить</button>
                </div>
            </div>
        </div>
        </form>
        `

        return content
    }
}