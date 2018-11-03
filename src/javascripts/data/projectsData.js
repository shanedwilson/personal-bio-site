import axios from 'axios';

const loadProjects = () => axios.get('http://localhost:3003/projects');

export default { loadProjects };
