import axios from 'axios';

const instance= axios.create({
    baseURL:"https://tinder-backend-react-heroku.herokuapp.com/",
});

export default instance;