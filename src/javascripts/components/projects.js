import 'bootstrap';
import $ from 'jquery';
import projectsData from '../data/projectsData';

const initView = () => {
  $('#home').show();
  $('#bio').hide();
  $('#tech').hide();
  $('#projects').hide();
};

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += '<div class=\'project\'>';
      newString += `<img src=${project.screenshot}></img>`;
      newString += '<div class=\'projectInfo\'';
      newString += `<h4>${project.title}:</h4>`;
      newString += `<p>${project.description}</p>`;
      newString += `<p>Technologies Used: ${project.technologiesUsed}</p>`;
      newString += `<p><a href='${project.url}'>Project Url</a></p>`;
      newString += `<p><a href='${project.githubUrl}'>GitHub Url</a></p>`;
      newString += '</div>';
      newString += '</div>';
    }
  });
  $('#projects').html(newString);
};

const getProjects = () => {
  projectsData.loadProjects()
    .then((projects) => {
      createProjectCards(projects.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { initView, getProjects };
