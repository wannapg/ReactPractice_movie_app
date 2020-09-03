import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'



const movies=[
  {
    id:1,
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    id:2,
    title: "Avatar",
    poster:"https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
    
  },
  {
    id:3,
    title: "Totoro",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81UbyXk3DAL._AC_SL1500_.jpg",
    
  },
  {
    id:4,
    title: "Star Wars",
    poster: "data:image/jpeg;base64,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"
  }
]
class App extends Component{
  render(){
    return (
      <div className="App">
        {movies.map (movie,index =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>          })}
      </div>
    );
  }
}
export default App;
