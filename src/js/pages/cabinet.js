export default class Cabinet {
    render() {
        const content = `
              <section id="page-article">
              <div class="row contacts-btn">
              <button id="add-contact" class="btn btn-success">Добавить контакт</button>
              </div>
              <div class="row contacts" id="contacts-row">
              <ul class="contacts__list" id="contacts-list">
<!--              <li class="contacts__list__item">-->
<!--              <span>img</span>-->
<!--              <span>Name</span>-->
<!--              <span>Surname</span>-->
<!--              <span>+375290000000</span>-->
<!--              <span>email</span>-->
<!--              <button class="btn btn-success edit-contact">Редактировать</button>-->
<!--              <button class="btn btn-danger delete-contact">Удалить</button></li>-->
              </ul>

              </div>
              </section>
        `
        return content
    }
}