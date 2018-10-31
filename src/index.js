// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import project from './projects';

const initApp = () => {
  project.createProjectCards();
};

initApp();
