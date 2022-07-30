import axios from 'axios'

//with importing this file to main.js , you ll be able to have "Authorization" in all your axios headers

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');