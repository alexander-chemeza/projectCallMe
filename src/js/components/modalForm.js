const content = {
    signIn: 'Sign In!',
    signUp: 'Sign Up'
}

import SignUp from "@/js/pages/signUp";
import SignIn from "@/js/pages/signIn";

class modalFormView {
    constructor() {
        this.forms = {
            signIn: new SignIn().render(),
            signUp: new SignUp().render()
        }

        this.signIn = document.getElementById('sign-in')
        this.signUp = document.getElementById('sign-up')
    }

    test(data) {
        alert(data)
    }

    toggle (data) {
        this.signIn.disabled = true
        this.signUp.disabled = true
        const modal = document.getElementById('modal')
        if(data === 'sign-in') {
            modal.innerHTML = this.forms.signIn
        } else if(data === 'sign-up') {
            modal.innerHTML = this.forms.signUp
        }
        modal.classList.toggle('modal--closed')
    }
}

class modalFormModel {
    constructor(view) {
        this.view = view || new modalFormView()
    }

    openTest(target) {
        if(target === 'sign-in') {
            this.view.test(content.signIn)
        } else if (target === 'sign-up') {
            this.view.test(content.signUp)
        }
    }

    show(target) {
        this.view.toggle(target)
    }
}

class modalFormController {
    constructor(view, model) {
        this.view = view || new modalFormView()
        this.model = model || new modalFormModel(this.view)

        this.init()
    }

    init() {
        this.view.signIn.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'))
        })

        this.view.signUp.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'))
        })
    }
}

export default class modalForm {
    constructor() {
        this.init()
    }

    init() {
        const view = new modalFormView()
        const model = new modalFormModel(view)
        const controller = new modalFormController(view, model)
    }
}