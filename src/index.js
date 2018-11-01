// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projects from './javascripts/components/projects';
import projectsData from './javascripts/data/projectsData';
import events from './javascripts/helpers/events';

const initApp = () => {
  events.setEvents();
  projectsData.loadProjects();
  projects.getProjects();
  projects.initView();
};

initApp();
