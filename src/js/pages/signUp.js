export default class SignUp {
    constructor() {
    }

    render() {
        const content = `
        <div class="form-field">
            <div class="row">
                <h2 class="form__header">Зарегистрироваться</h2>
            </div>
            <div class="row">
                <div class="col">
                    <input class="form-control control-input" type="text" placeholder="Введите имя">
                </div>
                <div class="col">
                    <input class="form-control control-input" type="text" placeholder="Введите фамилию">
                </div>
            </div>
            <div class="row">
                <input class="form-control control-input" type="email" placeholder="Введите адрес электронной почты">
            </div>
            <div class="row">
                <input class="form-control control-input" type="password" placeholder="Введите пароль">
            </div>
            <div class="row">
                <input class="form-control control-input" type="password" placeholder="Повторите пароль пароль">
            </div>
            <div class="row">
                <div class="col">
                    <button id="sign-up" type="submit" class="btn btn-success control-btn">Зарегистрироваться</button>
                </div>
                <div class="col">
                    <button id="btn-cancel" class="btn btn-danger control-btn">Отменить</button>
                </div>
            </div>
        </div>
        
        `

        return content
    }
}