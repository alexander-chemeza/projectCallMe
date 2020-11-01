/*------------*/
/* Components */
/*------------*/ 

import Header from '../components/header.js'
import Footer from '../components/footer.js'

/*-------*/
/* Pages */
/*-------*/

import About from '../pages/about.js'
import Contacts from '../pages/contacts.js'
import Error404 from '../pages/error404.js'
import Feedback from '../pages/feedback.js'
import Home from '../pages/home.js'

/*------*/
/* View */
/*------*/

class RouterView {
    constructor() {
        this.routes = {
            '': new Home(),
            'home': new Home(),
            'about': new About(),
            'contacts': new Contacts(),
            'feedback': new Feedback()
        }
        this.header = null || document.getElementById('header')
        this.content = null || document.getElementById('page')
        this.footer = null || document.getElementById('footer')
    }

    static updateNavigation(currentPage) {
        let links = document.getElementsByClassName('nav-menu--item')
        for(let i = 0; i < links.length; i++) {
            if(links[i].getAttribute('href').slice(1).toLowerCase() === currentPage) {
                links[i].classList.add('active')
            } else {
                links[i].classList.remove('active')
            }
        }
    }

    render(hash) {
        let content = this.routes[hash].render()

        this.header.innerHTML = new Header().render()
        this.footer.innerHTML = new Footer().render()

        this.content.innerHTML = ''
        this.content.innerHTML = content
        RouterView.updateNavigation(hash)
    }
}

/*-------*/
/* Model */
/*-------*/

class RouterModel {
    constructor (view) {
        this.view = view || new RouterView()
    }

    updatePage() {
        const hash = window.location.hash.slice(1).toLowerCase()
        this.view.render(hash)
    }
}

/*------------*/
/* Controller */
/*------------*/

class RouterController {
    constructor(view, model) {
        this.view = view || new RouterView
        this.model = model || new RouterModel()

        this.init()
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.model.updatePage()
        })

        window.addEventListener('load', () => {
            this.model.updatePage()
        })
    }
}

export default class Router {
    constructor() {
        this.init()
    }

    init() {
        const view = new RouterView()
        const model = new RouterModel(view)
        const controller = new RouterController(view, model)
    }
}