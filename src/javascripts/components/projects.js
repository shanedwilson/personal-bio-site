import 'bootstrap';
import $ from 'jquery';
import projectsData from '../data/projectsData';

const initView = () => {
  $('#home').show();
  $('#bio').hide();
  $('#tech').hide();
  $('#projects').hide();
};

// const createProjectCards = (projects) => {
//   let newString = '';
//   projects.forEach((project) => {
//     if (project.available === true) {
//       newString += '<div class=\'project\'>';
//       newString += `<img src=${project.screenshot}></img>`;
//       newString += '<div class=\'projectInfo\'';
//       newString += `<h4>${project.title}:</h4>`;
//       newString += `<p>${project.description}</p>`;
//       newString += `<p>Technologies Used: ${project.technologiesUsed}</p>`;
//       newString += `<p><a href='${project.url}'>Project Url</a></p>`;
//       newString += `<p><a href='${project.githubUrl}'>GitHub Url</a></p>`;
//       newString += '</div>';
//       newString += '</div>';
//     }
//   });
//   $('#projects').html(newString);
// };

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += `
      <div class="project card col-sm-3 px-0 m-3" id="${project.id}">
        <img class="card-img-top" src="${project.screenshot}" alt="${project.title}">
        <div class="card-body">
          <h4 class="card-title text-center">${project.title}:</h4>
          <p class="card-text">${project.description}</p>
          <p class="card-text">Technologies Used: ${project.technologiesUsed}</p>
          <p><a href='${project.url}' class="card-link">Project Url</a></p>
          <p><a href='${project.githubUrl}' class="card-link">GitHub Url</a></p>
        </div>  
      </div>`;
    }
    $('#projects').html(newString);
  });
};

<div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img src="//placehold.it/200" alt="">
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">BUTTON</a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
            FOOTER
        </div>
    </div>

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
