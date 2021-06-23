import './index.css'

const PopularMovies = props => {
  const {fetchedData} = props
  return (
    <div className="movie-container">
      <img
        src={`https://image.tmdb.org/t/p/w185${fetchedData.poster_path}`}
        className="img-props"
        alt="popularImg"
      />
    </div>
  )
}
export default PopularMovies
