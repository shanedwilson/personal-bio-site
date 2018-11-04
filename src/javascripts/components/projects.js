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
      newString += `
      <div class="project card col-sm-6 flex-row flex-wrap" id="${project.id}">
        <div class="card-header border-0 height:50%">
          <img class="card-img-top img-thumbnail img-fluid" src="${project.screenshot}" alt="${project.title}">
        </div>
        <div class="card-block px-2">
          <h4 class="card-title text-center">${project.title}:</h4>
          <p class="card-text">${project.description}</p>
          <p class="card-text">Technologies Used: ${project.technologiesUsed}</p>
        </div>  
        <div class=" row w-100 text-muted">
          <div class"col-6">
            <p class="text-center"><a href='${project.url}' class="card-link">Project Url</a></p>
          </div>
          <div class"col-6">
            <p class="text-center"><a href='${project.githubUrl}' class="card-link">GitHub Url</a></p>
          </div>   
        </div>  
      </div>`;
    }
    $('#projects').html(newString);
  });
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
