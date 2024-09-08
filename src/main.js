import { createApp } from 'vue'
import router from './routes/index';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faCode,
  faGithub,
  faArrowRight,  
);

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount('#app');