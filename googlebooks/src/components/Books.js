import React, {Component} from 'react'
import Search from './Search'
import API from '../utils/API'




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
        
        .then(res => {
            console.log(res)
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
       
      </div>
    );
  }
  }
  
  export default Books;