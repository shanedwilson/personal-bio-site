import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';

import apiKeys from '../db/apiKeys.json';

import './index.scss';

import sdwPhoto from './images/NewSDW.jpg';
import projects from './javascripts/components/projects';
import events from './javascripts/helpers/events';
import tech from './javascripts/components/tech';

$('#bio-pic').attr('src', sdwPhoto);


const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  events.setEvents();
  projects.initView();
  projects.getProjects();
  tech.getTech();
};

initApp();
