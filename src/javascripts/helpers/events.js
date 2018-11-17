import 'bootstrap';
import $ from 'jquery';

const homeBtnEvent = () => {
  $('#nav-div').on('click', '#nav-to-home', () => {
    $('#home').fadeIn(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeOut(250);
    $('#nav-to-home').addClass('active');
    $('#nav-to-bio').removeClass('active');
    $('#nav-to-tech').removeClass('active');
    $('#nav-to-projects').removeClass('active');
  });
};

const bioBtnEvent = () => {
  $('#nav-div').on('click', '#nav-to-bio', () => {
    $(window).scrollTop(0);
    $('.navbar-nav').removeClass('active');
    $('#home').fadeOut(250);
    $('#bio').fadeIn(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeOut(250);
    $('#nav-to-home').removeClass('active');
    $('#nav-to-bio').addClass('active');
    $('#nav-to-tech').removeClass('active');
    $('#nav-to-projects').removeClass('active');
  });
};

const techBtnEvent = () => {
  $('#nav-div').on('click', '#nav-to-tech', () => {
    $(window).scrollTop(0);
    $('#home').fadeOut(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeIn(250);
    $('#projects').fadeOut(250);
    $('#nav-to-home').removeClass('active');
    $('#nav-to-bio').removeClass('active');
    $('#nav-to-tech').addClass('active');
    $('#nav-to-projects').removeClass('active');
  });
};

const projBtnEvent = () => {
  $('#nav-div').on('click', '#nav-to-projects', () => {
    $(window).scrollTop(0);
    $('#home').fadeOut(250);
    $('#bio').fadeOut(250);
    $('#tech').fadeOut(250);
    $('#projects').fadeIn(250);
    $('#nav-to-home').removeClass('active');
    $('#nav-to-bio').removeClass('active');
    $('#nav-to-tech').removeClass('active');
    $('#nav-to-projects').addClass('active');
  });
};

const setEvents = () => {
  homeBtnEvent();
  bioBtnEvent();
  techBtnEvent();
  projBtnEvent();
};

export default { setEvents };
