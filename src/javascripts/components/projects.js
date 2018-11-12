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
      <div class="project card flex-row flex-wrap mb-4" id="${project.id}">
        <div class="card-header border-0">
          <img class="card-img-top img-thumbnail img-fluid" src="${project.screenshot}" alt="${project.title}">
        </div>
        <div class="card-block px-2">
          <h4 class="card-title text-center">${project.title}</h4>
          <p class="card-text">${project.description}</p>
          <p class="card-text">Technologies Used: ${project.technologiesUsed}</p>
        </div> 
        <div class="w-100"></div> 
        <div class="card-footer w-100 text-muted row d-flex justify-content-around">
            <p class="text-center"><a href='${project.url}' target="_blank" class="card-link">Project Url</a></p>
            <p class="text-center"><a href='${project.githubUrl}' target="_blank" class="card-link">GitHub Url</a></p>
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
      console.log(projects.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { initView, getProjects };
