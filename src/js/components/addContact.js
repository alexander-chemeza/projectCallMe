

class addContactView {
    constructor() {

    }
}

class addContactModel {
    constructor(view) {
        this.view = view || new addContactView()
    }
}

class addContactController {
    constructor(view, model) {
        this.view = view || new addContactView()
        this.model = model || new addContactModel(this.view)
        this.init()
    }

    init() {

    }
}

export default class addContact {
    constructor() {
        this.init()
    }

    init() {
        const view = new addContactView(),
              model = new addContactModel(view),
              controller = new addContactController(view, model)
    }
}