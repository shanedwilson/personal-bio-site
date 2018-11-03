import axios from 'axios';

const loadTech = () => axios.get('http://localhost:3004/tech');

export default { loadTech };
