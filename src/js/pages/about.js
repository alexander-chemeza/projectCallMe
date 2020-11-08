export default class About {
    render() {
        const content = `
              <section id="page-article">
              <div class="row">
              <div class="col info">
              <img class="info__img" src="./img/info.png" alt="question">
              </div>
              <div class="col content">
              <h2 class="content__header text-primary">Коротко о нас:</h2>
              <p class="content__text">Приложение CallMe разработано в 2020 году и с тех пор развивается на рынке хранения данных.</p>
              <p class="content__text">Мы предоставляем возможность удаленного хранения данных о Ваших контактах. В будущем будет реализована возможность резервного копирования и восстановления.</p>
              <p class="content__text">Команда разработчиков приложения CallMe заинтересована в расширении и продвижении данного приложения в сети интернет.</p>
              <h2 class="content__header text-primary">Преимущества:</h2>
              <ol class="content__list">
              <li>Бесплатный доступ в приложение;</li>
              <li>Удобный настраиваемый интерфейс;</li>
              <li>Защита пользовательских данных;</li>
              <li>Скорость работы.</li>
              </ol>
              </div>
              </div>
              </section>
        `
        return content
    }
}