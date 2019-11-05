import React, {Component} from 'react';
import Search from './Search';
import API from '../utils/API';
import BookList from './BookList';




class Books extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }
    handleFormSubmit  = event => {
        event.preventDefault();
        API.searchBook(this.state.searchField)
        
        .then(data => {
            
            
            
            this.setState({books: [...data.body.items]})
        })
        }

    
    handleSearch = (event) => {
        event.preventDefault();
        this.setState({searchField: event.target.value})
    }
    render(){
    return (
      <div >
        <Search 
        handleSearch={this.handleSearch} 
        handleFormSubmit={this.handleFormSubmit}
        />
        <BookList books={this.state.books}/>
       
      </div>
    );
  }
  }
  
  export default Books;