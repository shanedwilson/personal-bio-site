let projects = [
    {
        title: "Cool Project1", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project2", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project3", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

const pageFunction = () => {
  event.preventDefault();
  let buttonId = event.target.id;
  let fullPage = document.getElementsByClassName('fullPage');
  let homePage = document.getElementById('homePage');
  let bioPage = document.getElementById('bioPage');
  let technologiesPage = document.getElementById('technologiesPage');
  let projectsPage = document.getElementById('projectsPage');
  let pageId = ' ';

  if (buttonId === 'nav-to-bio') {
    pageId = bioPage;   
  } else if (buttonId === 'nav-to-technologies') {
    pageId = technologiesPage;
  } else if (buttonId === 'nav-to-projects') {
    pageId = projectsPage;
  } else {
    pageId = homePage
  }
  for (let i = 0; i < fullPage.length; i++) {
  fullPage[i].setAttribute('style', 'display:none')
  }
  console.log(pageId);
  pageId.setAttribute('style', '');
};
let newString = '';

const createProjectCards = () => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      newString += `<div class="project">`
        newString += `<img src=${projects[i].screenshot}></img>`
        newString +=`<div class="projectInfo"`
          newString += `<h4>${projects[i].title}:</h4>`
          newString += `<p>${projects[i].description}</p>`
          newString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`
          newString += `<p><a href="${projects[i].url}">Project Url</a></p>`
          newString += `<p><a href="${projects[i].githubUrl}">GitHub Url</a></p>`
        newString += `</div>`  
      newString += `</div>`;
    };
  } 
  printToDom(newString, 'projectsPage');
};


document.querySelector(".navigation").addEventListener('click', pageFunction);

createProjectCards();

