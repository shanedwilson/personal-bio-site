import $ from 'jquery';
import 'bootstrap';
import './index.scss';
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
};

initApp();
