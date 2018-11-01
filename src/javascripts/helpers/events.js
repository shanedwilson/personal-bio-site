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
    $(homeBtn).addClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).removeClass('active');
  });
};

const bioBtnEvent = () => {
  bioBtn.on('click', () => {
    $('.navbar-nav').removeClass('active');
    $('#home').hide();
    $('#bio').show();
    $('#tech').hide();
    $('#projects').hide();
    $(homeBtn).removeClass('active');
    $(bioBtn).addClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).removeClass('active');
  });
};

const techBtnEvent = () => {
  techBtn.on('click', () => {
    $('#home').hide();
    $('#bio').hide();
    $('#tech').show();
    $('#projects').hide();
    $(homeBtn).removeClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).addClass('active');
    $(projBtn).removeClass('active');
  });
};

const projBtnEvent = () => {
  projBtn.on('click', () => {
    $('#home').hide();
    $('#bio').hide();
    $('#tech').hide();
    $('#projects').show();
    $(homeBtn).removeClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).addClass('active');
  });
};

const setEvents = () => {
  homeBtnEvent();
  bioBtnEvent();
  techBtnEvent();
  projBtnEvent();
};

export default { setEvents };
