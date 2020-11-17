export default class Contacts {
    render() {
        const content = `
            <section id="page-article" class="article contacts pd-top">
            <div class="row">
            <div class="col contacts">
            <img src="./img/book.svg" alt="contacts" class="contacts__img">
            </div>
            <div class="col content">
            <h2 class="content__header text-primary">Контакты</h2>
            <div class="content__contact">
            <img class="contact__icon" src="./img/call.svg" alt="call">
            <span>+375(29)000-00-00</span>
            </div>
            <div class="content__contact">
            <img class="contact__icon" src="./img/call.svg" alt="call">
            <span>+375(44)000-00-00</span>
            </div>
            <div class="content__contact">
            <img class="contact__icon" src="./img/call.svg" alt="call">
            <span>+375(25)000-00-00</span>
            </div>
            <div class="content__contact">
            <img class="contact__icon" src="./img/mail.svg" alt="call">
            <span>example@mail.com</span>
            </div>
            <p class="content__text">Связаться со специалистом можно круглосуточно. Для этого перейдите во вкладку "Обратная связь"</p>
            </div>
            </div>
            </section>
        `
        return content
    }
}