import 'bootstrap';
import $ from 'jquery';
import techData from '../data/techData';


const createTechCards = (tech) => {
  let newString = '';
  tech.forEach((technology) => {
    newString += `
      <div class="technology card col-sm-3 px-0 m-3" id="${technology.id}">
        <img class="card-img-top" src="${technology.imgUrl}" alt="${technology.name}">
        <div class="card-footer text-muted mt-auto">
          <h5 class="card-title text-center ">${technology.name}</h5>
        </div>
      </div>
    `;
    $('#technologies').html(newString);
  });
};

const getTech = () => {
  techData.loadTech()
    .then((techs) => {
      createTechCards(techs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { getTech };
