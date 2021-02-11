import axios from 'axios';

//base de la ruta backend
export default axios.create({
    baseURL: 'http://localhost:1337',
    headers: {
        'Content-type': 'application/json'
    }
});
