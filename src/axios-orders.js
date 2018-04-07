import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerburger-603bc.firebaseio.com/'
});

export default instance;
