// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projects from './javascripts/components/projects';
import projectsData from './javascripts/data/projectsData';
import techData from './javascripts/data/techData';
import events from './javascripts/helpers/events';
import tech from './javascripts/components/tech';

const initApp = () => {
  events.setEvents();
  projectsData.loadProjects();
  techData.loadTech();
  projects.getProjects();
  projects.initView();
  tech.getTech();
};

initApp();
