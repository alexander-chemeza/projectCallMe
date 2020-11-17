export default class Header {
    constructor() {
    }

    render() {
        const content = `
            <nav class="navbar navbar-expand-lg navbar-light">
            <a id="brand" class="navbar-brand text-primary" href="#home">
<!--                <img class="logo" src="./favicon.ico" alt="logo">-->
                <span id="logo"></span>
                CallMe</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacts">Контакты</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#feedback">Обратная связь</a>
                    </li>
                    <li class="nav-item" id="cabinet">
                        <a class="nav-link" href="#cabinet">Кабинет</a>
                    </li>
                </ul>
                <div class="col-sm">
                <div class="buttons" id="buttons">
                    <button id="sign-up" type="button" class="btn btn-primary btn-sign-up">Зарегистрироваться</button>
                    <button id="sign-in" type="button" class="btn btn-primary btn-sign-in">Войти</button>
                </div>
                </div>
            </div>
        </nav>
        `
        return content;
    }
}