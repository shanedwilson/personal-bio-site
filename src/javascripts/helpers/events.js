import 'bootstrap';
import $ from 'jquery';

const homeBtn = $('#nav-to-home');
const bioBtn = $('#nav-to-bio');
const techBtn = $('#nav-to-tech');
const projBtn = $('#nav-to-projects');

const homeBtnEvent = () => {
  homeBtn.on('click', () => {
    $('#home').show();
    $('#bio').hide();
    $('#tech').hide();
    $('#projects').hide();
  });
};

const bioBtnEvent = () => {
  bioBtn.on('click', () => {
    $('#home').hide();
    $('#bio').show();
    $('#tech').hide();
    $('#projects').hide();
  });
};

const techBtnEvent = () => {
  techBtn.on('click', () => {
    $('#home').hide();
    $('#bio').hide();
    $('#tech').show();
    $('#projects').hide();
  });
};

const projBtnEvent = () => {
  projBtn.on('click', () => {
    $('#home').hide();
    $('#bio').hide();
    $('#tech').hide();
    $('#projects').show();
    console.log('projects');
  });
};

const setEvents = () => {
  homeBtnEvent();
  bioBtnEvent();
  techBtnEvent();
  projBtnEvent();
};

export default { setEvents };
