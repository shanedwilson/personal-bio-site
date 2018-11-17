import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';

import apiKeys from '../db/apiKeys.json';

import './index.scss';

import sdwPhoto from './images/NewSDW.jpg';
import navbar from './javascripts/components/navbar';
import projects from './javascripts/components/projects';
import tech from './javascripts/components/tech';
import events from './javascripts/helpers/events';

$('#bio-pic').attr('src', sdwPhoto);


const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.createNavbar();
  projects.initView();
  projects.getProjects();
  tech.getTech();
  events.setEvents();
};

initApp();
