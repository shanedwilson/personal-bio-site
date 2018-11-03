// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projects from './javascripts/components/projects';
import events from './javascripts/helpers/events';

const initApp = () => {
  events.setEvents();
  projects.initView();
};

initApp();
