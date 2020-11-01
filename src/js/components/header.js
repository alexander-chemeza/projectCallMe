export default class Header {
    constructor() {}

    render () {
        const content = `
        <div class="logo"><h1>CallMe</h1></div>
        <nav class="navigation">
        <ul class="nav-menu" id="menu">
        <li><a class="nav-menu--item" href="#home">Главная</a></li>
        <li><a class="nav-menu--item" href="#about">О приложении</a></li>
        <li><a class="nav-menu--item" href="#contacts">Контакты</a></li>
        <li><a class="nav-menu--item" href="#feedback">Обратная связь</a></li>
        </ul>
        </nav>
        <div class="buttons">
        <button>Зарегистрироваться</button>
        <button>Войти</button>
        </div>
        `
        return content;
    }
}