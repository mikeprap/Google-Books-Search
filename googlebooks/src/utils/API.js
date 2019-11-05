import axios from "axios";


export default {
    searchBook: function(searchField){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchField)
    }
}