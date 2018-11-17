import 'bootstrap';
import $ from 'jquery';

const homeBtn = $('#nav-to-home');
const bioBtn = $('#nav-to-bio');
const techBtn = $('#nav-to-tech');
const projBtn = $('#nav-to-projects');
// const logoBtn = $('#logo');

const logoBtnEvent = () => {
  $('#nav-div').on('click', '#logo', () => {
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
  $('#nav-div').on('click', '#nav-to-home', () => {
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
  $('#nav-div').on('click', '#nav-to-bio', () => {
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
  $('#nav-div').on('click', '#nav-to-tech', () => {
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
  $('#nav-div').on('click', '#nav-to-projects', () => {
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
