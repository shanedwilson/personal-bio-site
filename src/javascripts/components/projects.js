import 'bootstrap';
import $ from 'jquery';
import projectsData from '../data/projectsData';

// const pageSelect = (event) => {
//   event.preventDefault();
//   const pageId = event.srcElement.id;
//   const fullPage = document.getElementsByClassName('fullPage');
//   for (let i = 0; i < fullPage.length; i += 1) {
//     const page = fullPage[i];
//     if (page.classList.contains(pageId)) {
//       page.style.display = '';
//     } else {
//       page.style.display = 'none';
//     }
//   }
// };

const initView = () => {
  $('#Bio').hide();
  $('#Technologies').hide();
  $('#Projects').hide();
};

$('.navigation').click('click', () => {
  console.log('clicked');
});

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += '<div class=\'project\'>';
      newString += `<img src=${project.screenshot}></img>`;
      newString += '<div class=\'projectInfo\'';
      newString += `<h4>${project.title}:</h4>`;
      newString += `<p>${project.description}</p>`;
      newString += `<p>Technologies Used: ${projects.technologiesUsed}</p>`;
      newString += `<p><a href='${projects.url}'>Project Url</a></p>`;
      newString += `<p><a href='${projects.githubUrl}'>GitHub Url</a></p>`;
      newString += '</div>';
      newString += '</div>';
    }
  });
  $('#projectsPage').html(newString);
};

const getProjects = () => {
  projectsData.loadProjects().then((projects) => {
    createProjectCards(projects);
  }).catch((error) => {
    console.error(error);
  });
};

// document.querySelector('.navigation').addEventListener('click', pageSelect);

export default { initView, getProjects };
