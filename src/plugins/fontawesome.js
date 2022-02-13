import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faAt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'


library.add(faArrowLeft)
library.add(faGithub)
library.add(faLinkedin)
library.add(faAt)

export default {
  install (app) {
    return app.component('fa', FontAwesomeIcon)
  }
}