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
      <div class="project card mt-3" id="${project.id}">
      <div class="row">
        <div class="border-0 col-7">
          <img class="card-img-top img-thumbnail img-fluid" src="${project.screenshot}" alt="${project.title}">
        </div>
        <div class="card-block col-5 my-auto">
          <h4 class="card-title text-center">${project.title}</h4>
          <p class="card-text text-center m-3">${project.description}</p>
          <p class="card-text text-center">Technologies Used: ${project.technologiesUsed}</p>
        </div> 
      </div>  
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
      createProjectCards(projects);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { initView, getProjects };
