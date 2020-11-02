export default class Home {
    render() {
        const content = `
            <section class="article home">
            <div class="col col1of2">
            <img class="phone" src="./img/phone.png" alt="phone">
            </div>
            <div class="col col1of2 home">
            <div class="content">
            <h2>Простое. <br>Защищенное.<br>Надежное хранилище контактов.</h2>
            <p>CallMe - бесплатное простое, быстрое  и доступное хранилище контактов.</p>
            </div>
            </div>
            </section>
        `
        return content
    }
}