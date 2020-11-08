export default class Feedback {
    render() {
        const content = `
            <section class="article feedback">
            <div class="col col1of2">
            <img src="./img/feedback.png" alt="about">
            </div>
            <div class="col col1of2">
            <form class="feedback-form" method="POST" action="/">
            <input type="email" name="email" id="userEmail" placeholder="Введите адресс электронной почты">
            <textarea id="userMessage" name="userMessage" rows="32" cols="50"></textarea>
            <button type="submit">Отправить</button>
            </form>
            </div>
            </section>
        `
        return content
    }
}