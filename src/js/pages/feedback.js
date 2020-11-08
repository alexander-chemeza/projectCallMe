export default class Feedback {
    render() {
        const content = `
            <section id="page-article">
            <div class="row">
            <div class="col feedback">
            <img src="./img/question.svg" alt="feedback" class="feedback__img">
            </div>
            <div class="col">
            <form class="feedback-form">
            <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите адрес электронной почты">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="25"></textarea>
             <button type="submit" class="btn btn-primary btn-send">Отправить</button>
            </div>
            </form>
            </div>
            </div>
            </section>
        `
        return content
    }
}