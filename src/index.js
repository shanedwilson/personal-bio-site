import 'bootstrap';
import firebase from 'firebase/app';

import apiKeys from '../db/apiKeys.json';

import './index.scss';

import navbar from './javascripts/components/navbar';
import projects from './javascripts/components/projects';
import tech from './javascripts/components/tech';
import events from './javascripts/helpers/events';
import footer from './javascripts/components/footer';
import bio from './javascripts/components/bio';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.createNavbar();
  projects.initView();
  projects.getProjects();
  tech.getTech();
  events.setEvents();
  footer.createFooter();
  bio.createBio();
};

initApp();
