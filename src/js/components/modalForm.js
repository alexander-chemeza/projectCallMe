/**************/
/* Using info */
/**************/

// To use this module add buttons with ID sign-in and sign-up
// Add in template clear blocks with ID modal and modal-overlay


import SignUp from "@/js/pages/signUp";
import SignIn from "@/js/pages/signIn";

class modalFormView {
    constructor() {
        // Content of forms
        this.forms = {
            signIn: new SignIn().render(),
            signUp: new SignUp().render()
        }
        // Buttons to void modal
        this.signIn = document.getElementById('sign-in')
        this.signUp = document.getElementById('sign-up')

        // Our modal blocks
        this.modal = document.getElementById('modal')
        this.mask = document.getElementById('modal-overlay')

        this.btnCancel = null
    }
    // Show / close modal
    toggle (data) {
        // Show mask
        this.mask.classList.toggle('modal--closed')

        if(data === 'sign-in') {
            this.modal.innerHTML = this.forms.signIn
        } else if(data === 'sign-up') {
            this.modal.innerHTML = this.forms.signUp
        }
        this.modal.classList.toggle('modal--closed')
    }
    // Save collection of form buttons
    buttons() {
        return document.getElementsByClassName('control-btn')
    }

    // Save collection of form inputs
    inputs() {
        return document.getElementsByClassName('control-input')
    }
}

class modalFormModel {
    constructor(view) {
        this.view = view || new modalFormView()
    }

    show(target) {
        this.view.toggle(target)
    }

    getButtons() {
        return this.view.buttons()
    }

    readInput() {
        let info = []
        let inputs = this.view.inputs()
        for(let input of inputs) {
            info.push(input.value)
        }

        console.log(info)
    }
}

class modalFormController {
    constructor(view, model) {
        this.view = view || new modalFormView()
        this.model = model || new modalFormModel(this.view)

        this.init()
    }
    // For DRY code
    workWithForm() {
        let controls = this.model.getButtons()
        controls[0].addEventListener('click', (e) => {
            this.model.readInput()
            this.model.show(e.target.getAttribute('id'))
        })
        controls[1].addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'))
        })
    }

    init() {
        this.view.signIn.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'))

            this.workWithForm()
        })

        this.view.signUp.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'))

            this.workWithForm()
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