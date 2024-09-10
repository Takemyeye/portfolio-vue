import { createApp } from 'vue';
import router from './routes/index';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { 
  faArrowRight, faBrain, faDatabase, faServer, 
  faCodeBranch, faCodeCommit, faCloud, 
  faCode,
  faEnvelope,
  faPhone, 
} from '@fortawesome/free-solid-svg-icons';

import { 
  faGithub, faInstagram, faLinkedin, faTelegram, 
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faArrowRight, faBrain, faDatabase, faServer, 
  faCodeBranch, faCodeCommit, faCloud, faCode, 
  faEnvelope, faPhone,
  faGithub, faInstagram, faLinkedin, faTelegram, 
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
