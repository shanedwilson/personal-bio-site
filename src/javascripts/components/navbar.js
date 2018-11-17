import 'bootstrap';
import $ from 'jquery';

const createNavbar = () => {
  const newString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light d-flex">
    <a class="navbar-brand" id="logo">Shane D Wilson</a>
    <div class="ml-auto">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" id="nav-to-home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-to-bio">Bio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-to-tech">Tech</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id=nav-to-projects>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  `;
  $('#nav-div').html(newString);
  $('#nav-to-home').addClass('active');
};

export default { createNavbar };
