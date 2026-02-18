import { useState } from 'react'
import './App.css'
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App


// {
// "Title":"Godfather",
// "Year":"2022",
// "Rated":"TV-14",
// "Released":"05 Oct 2022",
// "Runtime":"157 min",
// "Genre":"Action, Crime, Drama",
// "Director":"Mohan Raja",
// "Writer":"Lakshmi Bhupala, Murali Gopy, Mohan Raja",
// "Actors":"Chiranjeevi, Salman Khan, Nayanthara",
// "Plot":"A political leader's death leads to a power struggle. Amid corruption, greed and deceit, an unlikely opponent steps up.",
// "Language":"Telugu",
// "Country":"India",
// "Awards":"1 win & 4 nominations total",
// "Poster":"https://m.media-amazon.com/images/M/MV5BMDI2OTU2MzctMzYwZC00MjM5LThmNmQtZjRhOWFlMjQ4NjkyXkEyXkFqcGc@._V1_SX300.jpg",
// "Ratings":  [
//   {
//     "Source":"Internet Movie Database",
//     "Value":"5.1/10"
//   }
// ],
// "Metascore":"N/A",
// "imdbRating":"5.1",
// "imdbVotes":"8,046",
// "imdbID":"tt13130308",
// "Type":"movie","DVD":"N/A",
// "BoxOffice":"N/A",
// "Production":"N/A",
// "Website":"N/A",
// "Response":"True"
// }