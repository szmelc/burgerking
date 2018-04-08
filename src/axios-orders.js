import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-c4742.firebaseio.com/'
});

export default instance;
