// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projects from './javascripts/components/projects';
import events from './javascripts/helpers/events';
import tech from './javascripts/components/tech';

const initApp = () => {
  events.setEvents();
  projects.initView();
  projects.getProjects();
  tech.getTech();
};

initApp();
