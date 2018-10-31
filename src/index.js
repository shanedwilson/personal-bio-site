// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
// import project from './javascripts/components/projects';
import projectsData from './javascripts/data/projectsData';

const initApp = () => {
  projectsData.loadProjects();
  // project.createProjectCards();
};

initApp();
