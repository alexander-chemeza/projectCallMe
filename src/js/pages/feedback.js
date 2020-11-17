export default class Feedback {
    render() {
        const content = `
            <section id="page-article" class="pd-top">
            <div class="row">
            <div class="col feedback">
            <img src="./img/question.svg" alt="#feedback" class="feedback__img">
            </div>
            <div class="col">
            <form method="POST" action="/feedback" class="feedback-form">
            <div class="form-group">
            <input type="email" name="email" class="form-control" id="feedback-email" aria-describedby="emailHelp" placeholder="Введите адрес электронной почты">
            <textarea name="userMessage" class="form-control" id="feedback-text" rows="25"></textarea>
             <button type="submit" class="btn btn-primary btn-send" id="feedback-btn">Отправить</button>
            </div>
            </form>
            </div>
            </div>
            </section>
        `
        return content
    }
}