import 'bootstrap';
import $ from 'jquery';

const homeBtn = $('#nav-to-home');
const bioBtn = $('#nav-to-bio');
const techBtn = $('#nav-to-tech');
const projBtn = $('#nav-to-projects');
const logoBtn = $('#logo');

const logoBtnEvent = () => {
  logoBtn.on('click', () => {
    $('#home').fadeIn(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeOut(250);
    $(homeBtn).addClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).removeClass('active');
  });
};

const homeBtnEvent = () => {
  homeBtn.on('click', () => {
    $('#home').fadeIn(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeOut(250);
    $(homeBtn).addClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).removeClass('active');
  });
};

const bioBtnEvent = () => {
  bioBtn.on('click', () => {
    $('.navbar-nav').removeClass('active');
    $('#home').fadeOut(250);
    $('#bio').fadeIn(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeOut(250);
    $(homeBtn).removeClass('active');
    $(bioBtn).addClass('active');
    $(techBtn).removeClass('active');
    $(projBtn).removeClass('active');
  });
};

const techBtnEvent = () => {
  techBtn.on('click', () => {
    $('#home').fadeOut(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeIn(250);
    $('#projects').fadeOut(250);
    $(homeBtn).removeClass('active');
    $(bioBtn).removeClass('active');
    $(techBtn).addClass('active');
    $(projBtn).removeClass('active');
  });
};

const projBtnEvent = () => {
  projBtn.on('click', () => {
    $('#home').fadeOut(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeIn(250);
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
  logoBtnEvent();
};

export default { setEvents };
