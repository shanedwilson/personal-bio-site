import 'bootstrap';
import $ from 'jquery';
import techData from '../data/techData';


const createTechCards = (techs) => {
  let newString = '';
  techs.forEach((tech) => {
    newString += `
      <div class="technology card col-sm-3 px-0 m-3" id="${tech.id}">
        <img class="card-img-top" src="${tech.imgUrl}" alt="${tech.name}">
        <div class="card-footer text-muted mt-auto">
          <h5 class="card-title text-center ">${tech.name}</h5>
        </div>
      </div>
    `;
    $('#technologies').html(newString);
  });
};

const getTech = () => {
  techData.loadTech()
    .then((techs) => {
      createTechCards(techs);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { getTech };
