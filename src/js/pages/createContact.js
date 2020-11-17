export default class createContact {
    constructor() {
    }

    render() {
        const content = `
<form>
<div class="form-field">
            <div class="row">
                <h2 class="form__header">Добавить контакт</h2>
            </div>
            <div class="row">
                <div class="col">
                    <input class="form-control control-input" type="text" name="name" placeholder="Введите имя" required>
                </div>
                <div class="col">
                    <input class="form-control control-input" type="text" placeholder="Введите фамилию" required>
                </div>
            </div>
            <div class="row">
                <input class="form-control control-input" type="email" placeholder="Введите адрес электронной почты" required>
            </div>
            <div class="row">
                <input class="form-control control-input" type="text" placeholder="Введите номер телефона" required>
            </div>
            <div class="row">
                <div class="col">
                    <button id="sign-up" type="submit" class="btn btn-success control-btn">Сохранить</button>
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