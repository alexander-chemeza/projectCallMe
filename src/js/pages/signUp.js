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
                    <input type="text" placeholder="Введите имя">
                </div>
                <div class="col">
                    <input type="text" placeholder="Введите фамилию">
                </div>
            </div>
            <div class="row">
                <input type="email" placeholder="Введите адрес электронной почты">
            </div>
            <div class="row">
                <input type="password" placeholder="Введите пароль">
            </div>
            <div class="row">
                <input type="password" placeholder="Повторите пароль пароль">
            </div>
            <div class="row">
                <div class="col">
                    <button>Зарегистрироваться</button>
                </div>
                <div class="col">
                    <button>Отменить</button>
                </div>
            </div>
        </div>
        
        `

        return content
    }
}