export default class Home {
    render() {
        const content = `
            <section id="page-article">
            <div class="row">
            <div class="col phone">
            <img class="phone__img" src="./img/phone.svg" alt="phone">
            </div>
            <div class="col content">
            <h2 class="content__header text-primary">Простое. <br>Защищенное.<br>Надежное хранилище контактов.</h2>
            <p class="content__text">CallMe - бесплатное простое, быстрое  и доступное хранилище контактов.</p>
            </div>
            </div>
            </section>
        `
        return content
    }
}