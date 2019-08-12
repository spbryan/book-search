import axios from "axios";

var KEY = "AIzaSyB9bMIAuOTq6CZxcNXzSYV6qPHknzxr0gY";
var URL_PREFIX = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getBooks: function (searchValue) {
        console.log("Boom");
        return axios.get(URL_PREFIX + searchValue + "&key=" + KEY);
    }
};
