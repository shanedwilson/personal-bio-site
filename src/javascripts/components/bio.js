import 'bootstrap';
import $ from 'jquery';

import sdwPhoto from '../../images/NewSDW.jpg';

$('#bio-pic').attr('src', sdwPhoto);

const createBio = () => {
  const newString = `
    <div class="jumbotron mx-auto">
        <div class="d-flex justify-content-around">
          <img id="bio-pic" class="img-fluid" src="${sdwPhoto}" alt="SDW">
        </div>
        <hr class="my-4">
        <h1 class="display-6 text-center">About Me</h1>
        <p>I am Shane D. Wilson, a Grammy award winning recording and mixing engineer who, after many years of hard work,
          has reached the end of his usefulness in the world of music making. As the music business economy has contracted, a contributor
          to a project needs to have more than one skill to stretch a lean budget farther. I entered the industry without the skills to play an instrument
          or write a song. I'm a tech person. Tech is what I love and troubleshooting is where I thrive.</p>

        <p>As I've considered, "What's next?," I noticed a significant number of peers entering the world of code. As I investigated that pivot and saw
        the required skills, it made perfect sense. The skillsets were so similar to my current craft, I just needed to learn some new languages.</p>

        <p> Enter Nashville Software School.</p>

        <p>I’m pursuing a new career in coding. One of the things I've always enjoyed about being a recording engineer
          is the daily task of troubleshooting. There's always a puzzle to be solved. That feels like a large part of what coding is about. I'm in.</p>

        <p>The path ahead is exciting and I can't wait to be a contributing member of the world of code.</p>
    </div>
  `;
  $('#bio').html(newString);
};

export default { createBio };
