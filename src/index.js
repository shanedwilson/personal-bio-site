// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projects from './javascripts/components/projects';
import projectsData from './javascripts/data/projectsData';

const initApp = () => {
  projectsData.loadProjects();
  projects.getProjects();
};

initApp();
