import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tech.json`)
    .then((result) => {
      const allTechObject = result.data;
      const allTechArray = [];
      if (allTechObject !== null) {
        Object.keys(allTechObject).forEach((techId) => {
          const newTech = allTechObject[techId];
          newTech.id = techId;
          allTechArray.push(newTech);
        });
      }
      resolve(allTechArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { loadTech };
