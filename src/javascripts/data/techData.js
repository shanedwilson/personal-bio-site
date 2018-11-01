import $ from 'jquery';

const loadTech = () => {
  const techPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3004/tech')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });
  return techPromise;
};

export default { loadTech };
