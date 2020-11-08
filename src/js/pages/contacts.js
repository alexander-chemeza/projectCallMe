export default class Contacts {
    render() {
        const content = `
            <section id="page-article" class="article contacts">
            <div class="row">
            <div class="col contacts">
            <img src="./img/book.svg" alt="contacts" class="contacts__img">
            </div>
            <div class="col content">
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
<!--            <div class="col col1of2">-->
<!--            <img src="./img/contacts.png" alt="contacts">-->
<!--            </div>-->
<!--            <div class="col col1of2">-->
<!--            <div class="content">-->
<!--            <p>+375(29)000-00-00</p>-->
<!--            <p>+375(44)000-00-00</p>-->
<!--            <p>+375(25)000-00-00</p>-->
<!--            <p>example@mail.com</p>-->
<!--            <p>Связаться со специалистом можно круглосуточно. Для этого перейдите во вкладку "Обратная связь"</p>-->
<!--            </div>-->
<!--            </div>-->
<!--            -->
            </section>
        `
        return content
    }
}