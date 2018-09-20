import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)
library.add(faInstagram)
// library.add(fas)
// library.add(far)

Vue.component('fa', FontAwesomeIcon)
