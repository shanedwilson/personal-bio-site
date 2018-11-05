import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter, faGithub, faLinkedin, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import sdwPhoto from './images/NewSDW.jpg';
import projects from './javascripts/components/projects';
import events from './javascripts/helpers/events';
import tech from './javascripts/components/tech';

$('#bio-pic').attr('src', sdwPhoto);


const initApp = () => {
  events.setEvents();
  projects.initView();
  projects.getProjects();
  tech.getTech();
  library.add(faTwitter, faGithub, faLinkedin, faInstagram, faEnvelopeSquare);
  dom.watch();
};

initApp();
