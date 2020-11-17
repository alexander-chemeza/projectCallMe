// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQYFSJWZMh3gQYm_ojaV-7XSOw3jXaJ9M",
    authDomain: "projectcallme-eb410.firebaseapp.com",
    databaseURL: "https://projectcallme-eb410.firebaseio.com",
    projectId: "projectcallme-eb410",
    storageBucket: "projectcallme-eb410.appspot.com",
    messagingSenderId: "339821660034",
    appId: "1:339821660034:web:c173ede7b8fb601662f19b",
    measurementId: "G-XXK6ELT2MV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()
db.settings({timestampsInSnapshots: true})

/**************/
/* Using info */
/**************/

// To use this module add buttons with ID sign-in and sign-up
// Add in template clear blocks with ID modal and modal-overlay
import SignUp from "@/js/pages/signUp";
import SignIn from "@/js/pages/signIn";
import createContact from "@/js/pages/createContact";

class modalFormView {
    constructor() {
        // Content of forms
        this.forms = {
            signIn: new SignIn().render(),
            signUp: new SignUp().render(),
            createContact: new createContact().render()
        }
        // Buttons to void modal
        this.signIn = document.getElementById('sign-in')
        this.signUp = document.getElementById('sign-up')
        this.addBtn = document.getElementById('add-contact')

        // Our modal blocks
        this.modal = document.getElementById('modal')
        this.mask = document.getElementById('modal-overlay')

        this.btnCancel = null

        this.menuItem = document.getElementById('cabinet')
        this.btns = document.getElementById('buttons')
        this.listRow = document.getElementById('contacts-row')
        this.list = document.getElementById('contacts-list')
    }

    render(data) {
        if(data === 'sign-in') {
            this.modal.innerHTML = this.forms.signIn
        } else if(data === 'sign-up') {
            this.modal.innerHTML = this.forms.signUp
        } else if(data === 'add-contact') {
            this.modal.innerHTML = this.forms.createContact
        }
    }

    moveDown(startPos) {
        let initialValue = startPos

        let go = setInterval(() => {
            let interval = 2
            if(initialValue < -50) {
                initialValue += interval
                this.modal.style.transform = `translate(-50%, ${initialValue}%)`
            } else {
                clearInterval(go)
            }
        }, 20);
    }

    fadeOut() {
        let timer = setInterval(() => {
            let opacity = Number(window.getComputedStyle(this.modal).getPropertyValue("opacity"))
            if(opacity > 0) {
                opacity -= 0.1
                this.modal.style.opacity = opacity
                this.mask.style.opacity = opacity
            } else {
                clearInterval(timer)
                this.toggle()
            }
        }, 50)
    }

    // Show / close modal
    toggle () {
        // Show mask
        this.mask.classList.toggle('modal--closed')

        this.modal.classList.toggle('modal--closed')
    }
    // Save collection of form buttons
    buttons() {
        return document.getElementsByClassName('control-btn')
    }

    // Save collection of form inputs
    getInputs() {
        let inputsValues = []
        let inputs = document.getElementsByClassName('control-input')
        for(let input of inputs) {
            inputsValues.push(input.value)
        }
        return inputsValues
    }

    getContactValues() {
        let inputs = document.getElementsByClassName('control-input')
        let inp = {
            name: inputs[0].value,
            surname: inputs[1].value,
            email: inputs[2].value,
            phone: inputs[3].value
        }

        return inp
    }

    reset() {
        this.modal.style.opacity = 1
        this.mask.style.opacity = 1
        this.modal.style.transform = 'translate(-50%, -225%)'
    }

    classListRender(doc) {
        let ul = document.getElementById('contacts-list')

        let li = document.createElement('li')
        let img = document.createElement('span')
        let name = document.createElement('span')
        let surname = document.createElement('span')
        let phone = document.createElement('span')
        let email = document.createElement('span')
        let btnUpdate = document.createElement('button')
        let btnDelete = document.createElement('button')



        li.setAttribute('id', doc.id)
        img.textContent = 'img'
        name.textContent = doc.data().name
        surname.textContent = doc.data().surname
        phone.textContent = doc.data().phone
        email.textContent = doc.data().email

        li.classList.add('contacts__list__item')
        btnUpdate.setAttribute('class', 'btn btn-success edit-contact')
        btnDelete.setAttribute('class', 'btn btn-danger delete-contact')
        btnUpdate.textContent = 'Редактировать'
        btnDelete.textContent = 'Удалить'

        ul.append(li)
        li.append(img)
        li.append(name)
        li.append(surname)
        li.append(phone)
        li.append(email)
        li.append(btnUpdate)
        li.append(btnDelete)


    }

    refreshList() {
        if(window.location.hash.slice(1).toLowerCase() === 'cabinet') {

            db.collection('contacts').orderBy('name').onSnapshot(snapshot => {
                let changes = snapshot.docChanges()
                let ul = document.getElementById('contacts-list')
                ul.innerText = ''
                changes.forEach(change => {

                    this.classListRender(change.doc)
                })
            })


        }



    }
}

class modalFormModel {
    constructor(view) {
        this.view = view || new modalFormView()
    }

    show(target, pos) {
        this.view.reset()
        this.view.render(target)
        this.view.moveDown(pos)
        this.view.toggle()
    }

    closeModal() {
        this.view.fadeOut()
        this.view.reset()
    }

    getButtons() {
        return this.view.buttons()
    }

    saveUser() {
        let values = this.view.getInputs()
        let user = {
            name: values[0],
            surname: values[1],
            email: values[2],
            password: values[3]
        }
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    readUser() {
        const inputs = document.getElementsByClassName('control-input')
        const user = JSON.parse(window.localStorage.getItem('user'))
    }

    saveContact() {
        let newContactInfo = this.view.getContactValues()

        db.collection('contacts').add({
            name: newContactInfo.name,
            surname: newContactInfo.surname,
            email: newContactInfo.email,
            phone: newContactInfo.phone,
        })

        this.view.refreshList()
    }

    readContacts() {
        this.view.refreshList()
    }
}

class modalFormController {
    constructor(view, model) {
        this.view = view || new modalFormView()
        this.model = model || new modalFormModel(this.view)

        this.init()
    }
    // For DRY code
    workWithForm(e) {
        let clickedBtnId = e.target.getAttribute('id')
        let controls = this.model.getButtons()
        controls[0].disabled = true
        document.addEventListener('keyup', e => {
            let permission = 0
            let inputs = document.getElementsByClassName('control-input')
            for(let input of inputs) {
                if(!input.value) {
                    permission = 0
                } else {
                    permission++
                }
            }

            if(permission >= inputs.length) {
                controls[0].disabled = false
            } else {
                controls[0].disabled = true
            }
        })


        controls[0].addEventListener('click', (e) => {
            if(clickedBtnId === 'sign-up') {
                this.model.saveUser()
            } else if(clickedBtnId === 'sign-in') {
                this.model.readUser()
            } else if(clickedBtnId === 'add-contact') {
                document.getElementById('contacts-list').innerHTML = ''
                this.model.saveContact()
            }

            this.model.closeModal()
        })
        controls[1].addEventListener('click', (e) => {
            this.model.closeModal()
        })
    }

    init() {
        this.view.signIn.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'), -225)

            this.workWithForm(e)
        })

        this.view.signUp.addEventListener('click', (e) => {
            this.model.show(e.target.getAttribute('id'), -225)

            this.workWithForm(e)
        })

        if(this.view.addBtn) {
            this.view.addBtn.addEventListener('click', (e) => {
                e.preventDefault()
                this.model.show(e.target.getAttribute('id'), -225)

                this.workWithForm(e)
            })
        }

        if(window.location.hash.slice(1).toLowerCase() === 'cabinet') {
            this.model.readContacts()
        }

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