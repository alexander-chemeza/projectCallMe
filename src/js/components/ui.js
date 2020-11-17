class uiModel {
    constructor(view) {
        this.view = view || new uiView()

    }

    welcomeUI() {
        this.view.displayUI()
    }
}

class uiView {
    constructor() {
        this.menuItem = document.getElementById('cabinet')
        this.btns = document.getElementById('buttons')

        this.signin = document.getElementById('sign-in')
        this.signup = document.getElementById('sign-up')
    }

    displayUI() {
        this.menuItem.style.display = "block"
        this.btns.innerHTML = ''
    }
}

class uiController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.init()
    }

    init() {
        this.view.signup.addEventListener('click', (e) => {
            this.model.welcomeUI()
        })

        this.view.signin.addEventListener('click', (e) => {
            this.model.welcomeUI()
        })
    }
}

export default class ui {
    constructor() {
        this.init()
    }

    init() {
        let view = new uiView()
        let model = new uiModel(view)
        let controller = new uiController(view, model)
    }
}