import 'bootstrap';
// import $ from 'jquery';
import techData from '../data/techData';

// const createTechCards = (tech) => {
//   console.log(tech);
//   let newString = '';
//   tech.forEach((technology) => {
//     newString += `
//       <div class="tech card col-sm-3 px-0 m-3" id="${technology.id}">
//         <img class="card-img-top" src="${technology.imgUrl}" alt="${technology.name}">
//         <div class="card-footer text-muted mt-auto">
//           <h5 class="card-title text-center ">${technology.name}</h5>
//         </div>
//       </div>
//     `;
//     $('#technologies').html(newString);
//   });
// };

// const getTech = () => {
//   techData.loadTech().then((tech) => {
//     createTechCards(tech.data);
//   }).catch((error) => {
//     console.error(error);
//   });
// };

techData.loadTech()
  .then((tech) => {
    console.log(tech);
    // createTechCards(tech.data);
  })
  .catch((error) => {
    console.error({ error });
  });
