import 'bootstrap';
import $ from 'jquery';

const createFooter = () => {
  const newString = `
<footer class="footer-div fixed-bottom bg-light">
    <div class="footer-container row justify-content-between">

      <div class="footer-copyright ml-4 text-secondary">© 2018 Shane D Wilson</div>

      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a href="mailto:me@shanedwilson.com" class="text-secondary">
            <i id="mail-icon" class="far fa-envelope"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/shanedwilson" target="_blank" class="text-secondary">
            <i id="git-icon" class="fab fa-github"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.facebook.com/sdwmixer" target="_blank" class="text-secondary">
            <i id="facebook-icon" class="fab fa-facebook fa-lg"></i>
          </a>
        </li>
        <li class="list-inline-item mr-4">
          <a href="https://www.linkedin.com/in/shane-d-wilson-2355a9165/" target="_blank" class="text-secondary">
            <i id="linked-icon" class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  `;
  $('#footer-div').html(newString);
};

export default { createFooter };
